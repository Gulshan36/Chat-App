import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { connectDB } from './lib/db.js'; // Import the database connection function
import authRoutes from './routes/auth.route.js'; 
import messageRoutes from './routes/message.route.js';

dotenv.config(); // Load environment variables from .env file
const app = express();

const PORT= process.env.PORT;

app.use(express.json()); // Middleware to parse JSON requests
app.use(cookieParser()); // Middleware to parse cookies

app.use("/api/auth", authRoutes);
app.use("/api/massage", messageRoutes);

app.listen(PORT, () => {
  console.log('Server is running on PORT:', + PORT);
  connectDB();
});