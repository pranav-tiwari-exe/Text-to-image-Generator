import express from 'express'
import { registerUser, loginUser, userCredits, paymentRazorpay, verifyRazorPay } from '../controllers/userController.js'
import userAuth from '../middlewares/auth.js'

const userRouter = express.Router()

userRouter.post('/api/user/register', registerUser)

userRouter.post('/api/user/login', loginUser)

userRouter.get('/api/user/credits', userAuth, userCredits)

userRouter.post('/api/user/pay-razor', userAuth, paymentRazorpay )

userRouter.post('/api/user/verify-razor', userAuth, verifyRazorPay )

export default userRouter  
