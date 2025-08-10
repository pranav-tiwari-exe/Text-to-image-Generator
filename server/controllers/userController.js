import User from '../models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import razorpay from 'razorpay'
import Transaction from '../models/transactionModel.js'

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.json({ success: false, message: 'All fields are required' })
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ success: false, message: 'User already exists' })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const userData = new User({
            name,
            email,
            password: hashedPassword
        })

        const newUser = await new User(userData).save();
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '15d' })

        res.json({ success: true, user: { name: newUser.name }, token })

    } catch (error) {
        console.error('Error registering user:', error)
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({ success: false, message: 'All fields are required' })
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: 'User does not exist' })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.json({ success: false, message: 'Invalid credentials' })
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '15d' })

        return res.json({ success: true, user: { name: user.name }, token })

    } catch (error) {
        console.error('Error Logging user:', error)
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
}

const userCredits = async (req, res) => {
    try {
        const userId = req.user.id
        const user = await User.findById(userId);
        if (!user) {
            return res.json({ success: false, message: 'User not found' });
        }
        res.json({ success: true, creditBalance: user.creditBalance, user: { name: user.name } });
    } catch (error) {
        console.log('Error fetching user credits:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

const razorpayInstance = new razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET_KEY
})

const paymentRazorpay = async (req, res) => {
    try {
        const userId = req.user.id
        const { planId } = req.body

        const userData = User.findById(userId)

        if (!userData || !planId) {
            return res.status(500).json({ success: false, message: error.message })
        }

        let credits, plan, amount, date

        switch (planId) {
            case 'Basic':
                plan = 'Basic'
                credits = 100
                amount = 10
                break;
            case 'Advanced':
                plan = 'Advanced'
                credits = 500
                amount = 50
                break;
            case 'Business':
                plan = 'Business'
                credits = 5000
                amount = 250
                break;
            default:
                return res.json({ success: false, message: "Plan not found !!!" })
        }

        date = Date.now()

        const transactionData = {
            userId,
            plan,
            amount,
            credits,
            date
        }

        const newTransaction = await Transaction.create(transactionData)

        const options = {
            amount: amount * 100,
            currency: process.env.CURRENCY,
            receipt: newTransaction._id
        }

        await razorpayInstance.orders.create(options, (error, order) => {
            if (error) {
                console.log(error)
                return res.json({ success: false, message: error })
            }
            res.json({ success: true, order })
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: error.message })
    }
}

const verifyRazorPay = async (req, res) => {
    try {
        const { razorpay_order_id } = req.body
        const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id)

        if (orderInfo.status === "paid") {
            const txData = await Transaction.findById(orderInfo.receipt)

            if (txData.payment) {
                return res.json({ success: false, message: 'Payment Failed' })
            }

            const userData = await User.findById(txData.userId)
            const creditBalance = userData.creditBalance + txData.credits
            await User.findByIdAndUpdate(userData._id, { creditBalance })
            await Transaction.findByIdAndUpdate(txData._id, { payment: true })

            res.json({ success: true, message: "Credits successfully added" })
        } else {
            res.json({ success: false, message: "Payment Failed" })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: error.message })
    }
}

export { registerUser, loginUser, userCredits, paymentRazorpay, verifyRazorPay }
