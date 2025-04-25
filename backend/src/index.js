import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { connectDB } from './lib/db.js'; // Import the database connection function
import authRoutes from './routes/auth.route.js'; 
import messageRoutes from './routes/message.route.js';

dotenv.config(); // Load environment variables from .env file
const app = express();

const PORT= process.env.PORT;

app.use(express.json()); // Middleware to parse JSON requests
app.use(cookieParser()); // Middleware to parse cookies
app.use(cors({
  origin: "http://localhost:5173", // Allow requests from the frontend URL
  credentials: true, // Allow credentials (cookies) to be sent
}));

app.use("/api/auth", authRoutes);
app.use("/api/massage", messageRoutes);

app.listen(PORT, () => {
  console.log('Server is running on PORT:', + PORT);
  connectDB();
});