import { motion } from 'framer-motion'

function OptinPage({
    fullName,
    setFullName,
    email,
    setEmail,
    isLoading,
    error,
    handleSubmit
}) {
    return (
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
                    className="space-y-3 mb-4"
                >
                    {/* Full Name Input */}
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-c-yellow text-gray-900 outline-none"
                        required
                        disabled={isLoading}
                    />

                    {/* Email Input */}
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-c-yellow text-gray-900 outline-none"
                        required
                        disabled={isLoading}
                    />

                    {/* Submit Button */}
                    <motion.button
                        whileHover={{ scale: isLoading ? 1 : 1.05 }}
                        whileTap={{ scale: isLoading ? 1 : 0.95 }}
                        type="submit"
                        disabled={isLoading}
                        className={`w-full px-6 py-3 font-semibold rounded-lg transition-colors duration-200 shadow-lg uppercase tracking-wide text-base ${isLoading
                            ? 'bg-gray-400 cursor-not-allowed text-gray-600'
                            : 'bg-c-yellow hover:bg-c-yellow/90 text-gray-800 cursor-pointer'
                            }`}
                    >
                        {isLoading ? 'Sending...' : 'Send Me PDF'}
                    </motion.button>

                    {/* Error Message */}
                    {error && (
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-600 text-sm mt-2"
                        >
                            {error}
                        </motion.p>
                    )}
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
    )
}

export default OptinPage






