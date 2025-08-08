import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const { user, setShowLogin } = useContext(AppContext)
    const navigate = useNavigate();

    const handleGenerateImageButton = () => {
        if (!user) {
            setShowLogin(true)
        } else {
            navigate('/result')
        }
    }

    return (
        <motion.div className='flex flex-col justify-center items-center text-center my-10'
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>

            <motion.div className='text-stone-500 inline-flex items-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'
                initial={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <p>Best text to image generator</p>
                <img src={assets.star_icon} alt='' />
            </motion.div>

            <motion.h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>Turn text to <span className='text-blue-600'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 2 }}>image</span>, in seconds</motion.h1>

            <p className='text-center max-w-xl mx-auto mt-5'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}>Unleash your creativity with our AI-powered text-to-image generator. Simply type a prompt, and watch as our advanced AI brings your imagination to life with vivid, high-resolution visuals. Whether you're an artist, marketer, storyteller, or just exploring ideas — our tool makes it effortless to create unique artwork, illustrations, and concept visuals from just a few words.</p>

            <motion.button className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ default: { duration: 0.5 }, opacity: { delay: 0.8, duration: 1 } }}
                onClick={handleGenerateImageButton}>
                Generate Image
                <img src={assets.star_group} className='h-6'></img>
            </motion.button>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className='flex items-center justify-center gap-3 mt-16 flex-wrap'>
                {Array(6).fill().map((_, index) => (
                    <motion.img
                        whileHover={{ scale: 1.05, duration: 0.1 }}
                        className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2} alt='' key={index} width={70} />
                ))}
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className='mt-2 text-neutral-600'> Generated images from imagify</motion.p>

        </motion.div>
    )
}

export default Header