import User from '../models/userModel.js'
import FormData from 'form-data'
import axios from 'axios'


export const generateImage = async (req, res) => {
    try {
        const {prompt} = req.body
        const userId= req.user.id


        const user = await User.findById(userId)

        if (!user) {
            return res.json({ success: false, message: 'User not found' })
        }
        else if (!prompt) {
            return res.json({ success: false, message: 'Prompt is required' })
        }
        else if (user.creditBalance <= 0) {
            return res.json({ success: false, message: 'Insufficient credits' })
        }

        const formData = new FormData()
        formData.append('prompt', prompt)

        const { data } = await axios.post('https://clipdrop-api.co/text-to-image/v1', formData, {
            headers: {
                'x-api-key': process.env.CLIPDROP_API_KEY
            },
            responseType: 'arraybuffer'
        })

        const base64Image = Buffer.from(data, 'binary').toString('base64')
        const resultImage = `data:image/png;base64,${base64Image}`

        await User.findByIdAndUpdate(user._id, { creditBalance: user.creditBalance - 1 })

        res.json({ success: true, image: resultImage, creditBalance: user.creditBalance - 1, message: 'Image generated successfully' })

    } catch (error) {
        console.error('Error generating image:', error)
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
}