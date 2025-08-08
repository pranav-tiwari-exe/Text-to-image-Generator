import { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const GenerateButton = () => {

    const { user, setShowLogin } = useContext(AppContext)
    const navigate = useNavigate()

    const handleGenerateImageButton = () => {
        if (!user) {
            setShowLogin(true)
        } else {
            navigate('/result')
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center pb-16'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl mt-2 font-semibold text-neutral-800 py-6 md:py-16'>See the magic. Try now</h1>
            <motion.button className='inline-flex sm:text-lg text-white bg-black m-auto  px-12 py-3  gap-2 rounded-full hover:scale-105 transition-all duration-500'
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ default: { duration: 0.5 }, opacity: { delay: 0.8, duration: 1 } }}
                onClick={handleGenerateImageButton}>
                Generate Image
                <img src={assets.star_group} className='h-6'></img>
            </motion.button>

        </motion.div>
    )
}

export default GenerateButton