import { useState, useEffect } from "react"
import { testimonials } from "./testimonials"
import { AnimatePresence, motion } from "framer-motion"

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)

    // Auto-advance testimonials with proper cleanup and reset
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        }, 6000)

        return () => clearInterval(interval)
    }, [currentIndex, testimonials.length]) // Reset timer when currentIndex changes

    const handleIndicatorClick = (index) => {
        setCurrentIndex(index)
        // Timer will automatically reset due to useEffect dependency on currentIndex
    }

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
                >
                    What Guitarists Are Saying:
                </motion.h2>

                <div className="relative h-64 md:h-48">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 flex items-center justify-center rounded-xl"
                        >
                            <div className="bg-white shadow-lg p-8 max-w-2xl mx-4 rounded-xl ">
                                <div className="text-4xl text-gray-500">"</div>
                                <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                                    {testimonials[currentIndex].quote}
                                </p>
                                <div className="border-t">
                                    <p className="font-semibold text-gray-900">
                                        {testimonials[currentIndex].name}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        {testimonials[currentIndex].title}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Testimonial indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleIndicatorClick(index)}
                            className={`w-3 h-3 rounded-full transition-colors duration-200 ${index === currentIndex ? "bg-green-600" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}