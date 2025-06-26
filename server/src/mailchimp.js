import mailchimp from "@mailchimp/mailchimp_marketing"
import { MAILCHIMP_API_KEY, MAILCHIMP_SERVER_PREFIX, MAILCHIMP_AUDIENCE_ID, NODE_ENV } from "../config/index.js";

mailchimp.setConfig({
    apiKey: MAILCHIMP_API_KEY,
    server: MAILCHIMP_SERVER_PREFIX,
});

export const optInUser = async (req, res) => {
    try {
        const { email, fullName } = req.body;

        // Validate email and full name
        if (!email || !fullName) {
            return res.
                status(400)
                .json({
                    success: false,
                    message: "Email and fullName are required fields"
                });
        }


        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res
                .status(400)
                .json({
                    success: false,
                    message: "Please provide a valid email address"
                });
        }


        let firstName = ""
        let lastName = ""


        const nameParts = fullName.trim().split(" ");
        firstName = nameParts[0];
        lastName = nameParts.slice(1).join(" ") || ""; // Handles middle names, or no last name


        console.log("Adding user to Mailchimp audience:", email);

        // Add user to Mailchimp audience
        const response = await mailchimp.lists.addListMember(MAILCHIMP_AUDIENCE_ID, {
            email_address: email,
            status: "subscribed", // or "pending" for double opt-in
            merge_fields: {
                FNAME: firstName || "",
                LNAME: lastName || ""
            }
        });

        console.log("Mailchimp response:", response);

        res.status(200).json({
            success: true,
            message: "Successfully subscribed to newsletter",
            data: {
                email: response.email_address,
                status: response.status,
                id: response.id
            }
        });

    } catch (error) {
        console.error("Mailchimp error:", error);

        // Handle specific Mailchimp errors
        if (error.status === 400 && error.response?.body?.title === "Member Exists") {
            return res.status(409).json({
                success: false,
                message: "This email is already subscribed to our newsletter"
            });
        }

        if (error.status === 400 && error.response?.body?.title === "Invalid Resource") {
            return res.status(400).json({
                success: false,
                message: "Invalid email address format"
            });
        }

        // Generic error response
        res.status(500).json({
            success: false,
            message: "Failed to subscribe to newsletter. Please try again later.",
            error: NODE_ENV === 'development' ? error.message : undefined
        });
    }
}