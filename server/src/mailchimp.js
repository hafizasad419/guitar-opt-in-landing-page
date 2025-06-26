import mailchimp from "@mailchimp/mailchimp_marketing"
import { MAILCHIMP_API_KEY, MAILCHIMP_SERVER_PREFIX } from "../config/index.js";


mailchimp.setConfig({
    apiKey: MAILCHIMP_API_KEY,
    server: MAILCHIMP_SERVER_PREFIX,
});

export const optInUser = async (req, res) => {

    try {
        const { email } = req.query

        const response = await
            mailchimp
                .ping
                .get();

        console.log("MAILCHIMP PING RESPONSE", response);
        console.log("EMAIL:", email);

        res
            .status(200)
            .json({
                success: true,
                message: "Request processed successfully"
            })
    } catch (error) {
        console.log(error?.message || error)
    }

}

