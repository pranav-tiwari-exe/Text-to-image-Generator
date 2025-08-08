import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
    return (
        <motion.div
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='flex flex-col items-center justify-center my-20 py-12'>

            <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>
                Customer testimonials
            </h1>
            <p className='text-gray-500 mb-12'> What our users are saying</p>

            <div className='flex flex-wrap gap-6'>
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className='p-12 bg-white/20 shadow-md rounded-lg m-auto w-80 border hover:scale-[1.02] transition-all duration-300'>
                        <div className='flex  flex-col items-center justify-center mb-4'>
                            <img src={testimonial.image} alt={testimonial.name} className='w-14 rounded-full mb-3' />
                            <h2 className='text-xl font-semibold'>{testimonial.name}</h2>
                            <p className='text-gray-600 text-center mb-4'>{testimonial.role}</p>
                            <div className='flex mb-4'>
                                {Array(testimonial.stars).fill().map((star, index) => (
                                    <img key={index} src={assets.rating_star} alt="" />
                                ))}
                            </div>
                            <p className='text-center text-sm text-gray-600'>{testimonial.text}</p>
                        </div>
                    </div>
                ))}
            </div>

        </motion.div>
    )
}

export default Testimonials