import React from 'react'
import { assets } from '../assets/assets'

const GenerateButton = () => {
    return (
        <div className='text-center pb-16'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl mt-2 font-semibold text-neutral-800 py-6 md:py-16'>See the magic. Try now</h1>
            <button className='inline-flex sm:text-lg text-white bg-black m-auto  px-12 py-3  gap-2 rounded-full hover:scale-105 transition-all duration-500'>
                Generate Image
                <img src={assets.star_group} className='h-6'></img>
            </button>

        </div>
    )
}

export default GenerateButton