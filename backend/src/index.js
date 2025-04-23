import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './lib/db.js'; // Import the database connection function
import authRoutes from './routes/auth.route.js'; // Import the auth routes


dotenv.config(); // Load environment variables from .env file
const app = express();

const PORT= process.env.PORT;

app.use(express.json()); // Middleware to parse JSON requests

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log('Server is running on PORT:', + PORT);
  connectDB();
});