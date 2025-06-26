import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import "./Home.css"
import Testimonials from "./Testimonials"

function Home() {
    const [currentPage, setCurrentPage] = useState("optin") // 'optin' or 'thankYou'
    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email.trim()) {
            setCurrentPage("thankYou")
        }
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Main Opt-in Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <AnimatePresence mode="wait">
                        {currentPage === "optin" ? (
                            <motion.div
                                key="optin"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
                            >
                                {/* Left Side - Image */}
                                <div className="flex-1 max-w-md">
                                    <motion.img
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                        src="/man-with-guitar.jpg"
                                        alt="guitarist playing guitar"
                                        className="w-full h-auto rounded-lg"
                                    />
                                </div>

                                {/* Right Side - Form */}
                                <div className="flex-1 max-w-lg text-center md:text-left">
                                    <motion.h1
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 uppercase"
                                    >
                                        From <span className="text-c-maroon">Frustration to Flow</span>, A Guitar Book That Fixes Mistakes and Builds Strumming Confidence
                                    </motion.h1>

                                    <motion.form
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                        onSubmit={handleSubmit}
                                        className="flex flex-col sm:flex-row gap-3 mb-4"
                                    >
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your Email address"
                                            className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-c-yellow text-gray-900 outline-none"
                                            required
                                        />
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            type="submit"
                                            className="px-6 py-3 bg-c-yellow hover:bg-c-yellow/90 text-gray-800 font-semibold rounded-lg transition-colors duration-200 shadow-lg uppercase tracking-wide text-base cursor-pointer"
                                        >
                                            Send Me PDF
                                        </motion.button>
                                    </motion.form>

                                    <motion.p
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 0.5 }}
                                        className="text-lg text-gray-600 leading-relaxed"
                                    >
                                        <strong>BONUS:</strong> Get the 'Top 10 Guitar Chords for Beginners' PDF — loved by 10,000+
                                        students.
                                    </motion.p>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="thankYou"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className="text-center py-20"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">You're All Set! 🎸</h1>
                                    <p className="text-xl text-gray-600 mb-8">Check your inbox for your free guitar lesson.</p>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setCurrentPage("optin")}
                                        className="px-6 py-3 bg-c-yellow hover:bg-c-yellow/90 text-gray-800 tracking-wide cursor-pointer font-semibold rounded-lg transition-colors duration-200"
                                    >
                                        Back to Form
                                    </motion.button>
                                </motion.div>
                            </motion.div>
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
