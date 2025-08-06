import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center my-20'>
        
        <div className='text-stone-500 inline-flex items-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'>
            <p>Best text to image generator</p>
            <img src={assets.star_icon} alt=''/>
        </div>

        <h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>Turn text to <span className='text-blue-600'>image</span>, in seconds</h1> 

        <p className='text-center max-w-xl mx-auto mt-5'>Unleash your creativity with our AI-powered text-to-image generator. Simply type a prompt, and watch as our advanced AI brings your imagination to life with vivid, high-resolution visuals. Whether you're an artist, marketer, storyteller, or just exploring ideas — our tool makes it effortless to create unique artwork, illustrations, and concept visuals from just a few words.</p>

        <button className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full'>
            Generate Image 
            <img src={assets.star_group} className='h-6'></img>
        </button>

        <div className='flex items-center justify-center gap-3 mt-16 flex-wrap'>
            {Array(6).fill().map((_, index) => (
                <img  className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' src={index%2 === 0 ? assets.sample_img_1 :assets.sample_img_2} alt='' key={index} width={70}/>
            ))}
        </div>

        <p className='mt-2 text-neutral-600'> Generated images from imagify</p>

    </div>
  )
}

export default Header