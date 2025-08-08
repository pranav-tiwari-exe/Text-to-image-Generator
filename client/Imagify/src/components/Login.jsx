import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'


const Login = () => {
    const [signIn, setSignIn] = useState(true)
    const { setShowLogin } = useContext(AppContext)


    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [])

    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>

            <motion.form
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} 
            className='relative bg-white p-10 rounded-xl text-slate-500'>{
                signIn ? (
                    <>
                        <h1 className='text-center text-2xl text-neutral-700 font-medium'>Login</h1>
                        <p className='text-sm mt-2'>Welcome back! please sign in to continue</p>
                    </>
                ) : (
                    <>
                        <h1 className='text-center text-2xl text-neutral-700 font-medium'>Sign Up</h1>
                        <p className='text-sm mt-2'>Welcome ! please create an account to continue</p>
                    </>
                )
            }


                {!signIn && (<div className='border px-5 py-2 flex items-center gap-2 rounded-full mt-5'>
                    <img src={assets.profile_icon} alt='' width={25} />
                    <input type='text' placeholder='Username' className='outline-none text-sm' required />
                </div>)}
                <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                    <img src={assets.email_icon} alt='' />
                    <input type='email' placeholder='example@gmail.com' className='outline-none text-sm' required />
                </div>
                <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-4'>
                    <img src={assets.lock_icon} alt='' />
                    <input type='password' placeholder='********' className='outline-none text-sm' required />
                </div>

                {signIn && (<p className='text-sm text-blue-600 my-4 cursor-pointer'>Forgot Password?</p>)}

                {signIn ? (<>
                    <button className='bg-blue-600 w-full text-white py-2 rounded-full '>Sign In</button>
                    <p className='mt-5 text-center'>Don't have an account, <span className='text-blue-600 cursor-pointer' onClick={() => setSignIn(false)}>Sign Up</span></p>
                </>) : (<>
                    <button className='bg-blue-600 w-full text-white py-2 rounded-full mt-4'>Create Account</button>
                    <p className='mt-5 text-center'>Already have an account, <span className='text-blue-600 cursor-pointer' onClick={() => setSignIn(true)}>Login</span></p>
                </>)}

                <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt='' className='absolute top-5 right-5 cursor-pointer' />


            </motion.form>

        </div>
    )
}

export default Login