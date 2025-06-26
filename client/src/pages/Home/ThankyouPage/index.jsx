import { motion } from 'framer-motion'

function ThankyouPage({
    setCurrentPage
}) {
    return (
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
    )
}

export default ThankyouPage