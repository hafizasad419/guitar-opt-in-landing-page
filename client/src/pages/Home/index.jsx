import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import axios from "axios"
import "./Home.css"
import Testimonials from "./Testimonials"
import ThankyouPage from "./ThankyouPage"
import { SERVER_URL } from "../../constants.js"
import OptinPage from "./OptinPage"

function Home() {
    const [currentPage, setCurrentPage] = useState("optin") // 'optin' or 'thankYou'
    const [email, setEmail] = useState("")
    const [fullName, setFullName] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Clear previous errors
        setError("")

        // Validate inputs
        if (!email.trim() || !fullName.trim()) {
            setError("Please fill in all fields")
            return
        }

        setIsLoading(true)

        try {
            const response = await axios.post(`${SERVER_URL}/opt-in`, {
                email: email.trim(),
                fullName: fullName.trim()
            })

            if (response.data.success) {
                setCurrentPage("thankYou")
                // Reset form
                setEmail("")
                setFullName("")
            }
        } catch (error) {
            console.error('Subscription error:', error)

            // Handle different error scenarios
            if (error.response?.data?.message) {
                setError(error.response.data.message)
            } else if (error.response?.status === 409) {
                setError("This email is already subscribed to our newsletter")
            } else {
                setError("Something went wrong. Please try again later.")
            }
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Main Opt-in Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <AnimatePresence mode="wait">
                        {currentPage === "optin" ? (
                            <OptinPage
                                fullName={fullName}
                                setFullName={setFullName}
                                email={email}
                                setEmail={setEmail}
                                isLoading={isLoading}
                                error={error}
                                handleSubmit={handleSubmit}
                            />
                        ) : (
                            <ThankyouPage
                                setCurrentPage={setCurrentPage}
                            />
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* Testimonials Section */}
            <Testimonials />
        </div>
    )
}

export default Home