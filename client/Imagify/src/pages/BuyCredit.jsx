import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const BuyCredit = () => {
  // const { user, backendUrl, loadCredits, token, setShowlogin } = useContext(AppContext)
  const { user, loadCredits, token, setShowlogin } = useContext(AppContext)
  const navigate = useNavigate()

  const initPay = async (order) => {
    try {
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: 'Credits Payment',
        description: 'Payment for buying credits in Imagify',
        order_id: order.id,
        receipt: order.receipt,
        handler: async (res) => {
          try {
            const { data } = await axios.post("/api/user/verify-razor", res, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
            if (data.success) {
              loadCredits()
              navigate('/')
              toast.success("Credit Added")
            }

          } catch (error) {
            toast.error(error.message)
          }
        }
      }
      const rzp = new window.Razorpay(options)
      rzp.open()

    } catch (error) {
      toast.error(error)
    }
  }

  const paymentRazorPay = async (planId) => {
    try {
      if (!user) {
        setShowlogin(true)
      }
      else {
        const { data } = await axios.post("/api/user/pay-razor", { planId }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        if (data.success) {
          initPay(data.order)
        } else {
          toast.error(data.message)
        }
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='min-h-[80vh] text-center pt-14 mb-10'>
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className=' border border-gray-400 px-10 py-2 rounded-full mb-6'>Our Plans</motion.button>
      <h1 className='text-center text-3xl font-medium mb-6 sm:mb-10'>Choose the plan</h1>

      <div className='flex flex-wrap justify-center gap-6 text-left'>
        {plans.map((plan, index) => (
          <div key={index} className='bg-white drop-shadow-sm rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500'>
            <img src={assets.logo_icon} alt='' width={40} />
            <p className='mt-3 mb-1 font-semibold'>{plan.id}</p>
            <p className='text-sm'>{plan.desc}</p>
            <p className='mt-6'><span className='text-3xl font-medium'> ${plan.price}
            </span> / {plan.credits} credits</p>
            <button onClick={() => paymentRazorPay(plan.id)} className=' w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52'>
              {user ? 'Purchase' : 'Get Started'}
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default BuyCredit
