import {useState} from 'react'
import { assets } from '../assets/assets'

const Result = () => {

  const [image, setImage] = useState(null)
  const [isImageLoaded, setIsImageLoaded] = useState(false)  
  const [loading, setLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = async (e) => {

  }


  const reset= () => {
    setImage(null)
    setIsImageLoaded(false)
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col min-h-[90vh] items-center justify-center gap-6 mt-4'>
      <div>
        <div className='relative'>
          <img src={assets.sample_img_1} alt="" className='max-w-sm rounded' />
          <span className={`absolute bottom-0 left-0 h-1 bg-blue-500
            ${loading ? 'w-full transition-all duration-[10s]' : 'w-0'}`} />
        </div>
        <p className={!loading ? 'hidden' :''}>Loading .....</p>


      </div>
    {!isImageLoaded ?
      (<div className='flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full'>
        <input type='text' placeholder='Describe what you want to generate' className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20' onChange={e=>setInputValue(e.target.value)} value={inputValue}/>
        <button type='submit' className='bg-zinc-900  px-10 sm:px-16 py-3 rounded-full'>Generate</button>
      </div>)
    :
      (<div className='flex flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full gap-4'>
        <p className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer' onClick={reset}>Generate Another</p>
        <a href={image} download className=' bg-zinc-900 px-10 py-3 rounded-full cursor-pointer'>Download</a>
      </div>)
      }
    </form>
  )
}

export default Result