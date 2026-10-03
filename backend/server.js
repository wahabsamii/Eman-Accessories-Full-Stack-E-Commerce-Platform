import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
import dotenv from "dotenv";
import connectCloudinary from './config/cloudinary.js';
import bodyParser from 'body-parser';
import productRoutes from './routes/productRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import productModel from './models/productModel.js';
import cors from 'cors';
dotenv.config();

const app = express();

const port = 9000;


const allowedOrigins = [
  'http://localhost:3000', // your local frontend
  'https://eman-accessories.vercel.app', // your deployed frontend
];

const corsOptions = {
  origin: (origin, callback) => {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // if you are sending cookies
};

app.use(cors(corsOptions));



mongoose.connect(process.env.DB_STRING).then(() => console.log('Database is connected successfully')).catch((e) => console.log(e));
connectCloudinary();
app.get("/", (req,res) => {
    res.send("Eman Backend is working agin")
});
app.use(express.json())
app.delete('/delete-product/:pid', async (req, res) => {
    const { pid } = req.params;
    {
        try {
            const response = await productModel.findByIdAndDelete(pid).select('-photo');
            res.status(200).send({
                success: true,
                message: "Product Deleted successfully",
              });
        } catch (error) {
            console.log(error);
        }
    }
    
  });
app.use(userRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/order", orderRoutes);


app.listen(port, () => {
    console.log('Server is running on port 9000')
})
// export default app;

