import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24 p-6 md:px-28 '>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'> Create AI Images </h1>
        <p className='text-gray-500 mb-8'> Turn your imagination into visuals </p>

        <div className='flex flex-col gap-5 mg:gap-14 md:flex-row items-center'>
            <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg'/>
            <div>
                <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI-Powered text to Image Generator</h2>
                <p className='text-gray-600 mb-4'>
                    Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life in seconds. Perfect for artists, marketers, and anyone looking to create custom visuals without the hassle of traditional design tools.
                </p>
                <p className='text-gray-600 '>
                    Our AI image generator is designed to be user-friendly and accessible to everyone. Simply enter your text prompt, and let our advanced algorithms generate high-quality images tailored to your description. No design skills required! Whether you're creating content for social media, websites, or personal projects, our tool makes it easy to produce professional-looking images in no time.
                </p>
            </div>
        </div>

    </div>

  )
}

export default Description