import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'

const port = process.env.PORT || 5000;
const app = express()

app.use(express.json())
app.use(cors())


app.use(userRouter) 
app.use(imageRouter) 

app.get('/api', (req, res) => {
  res.send('Hello from API!');
})

app.use((req, res, next) => {
  console.log(`[Vercel DEBUG] Path: ${req.path}, Method: ${req.method}`);
  res.status(404).json({ message: 'Route not found in Express app' });
});

await connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  })
});

export default app;
