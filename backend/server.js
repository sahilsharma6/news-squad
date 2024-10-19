import path from "path";
<<<<<<< HEAD
import cors from 'cors';
=======
import cors from "cors";
>>>>>>> 9ec866ad232901ba253445aadd066978180bad85
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
const port = process.env.PORT || 5000;
connectDB();
const app = express();
<<<<<<< HEAD
import categoryRoutes from './routes/categoryRoutes.js';

app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend domain
  credentials: true, // Allow credentials
}));
=======
import categoryRoutes from "./routes/categoryRoutes.js";
import imageUploadRoute from "./routes/imageUpload.js";
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend domain
    credentials: true, // Allow credentials
  })
);
>>>>>>> 9ec866ad232901ba253445aadd066978180bad85
// app.use(cors({
//   origin: 'https://travelsquads.com',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   credentials: true
// }));

<<<<<<< HEAD

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api/categories', categoryRoutes);
=======
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/categories", categoryRoutes);
app.use("/api/upload-image", imageUploadRoute);
>>>>>>> 9ec866ad232901ba253445aadd066978180bad85
app.get("/", (req, res) => {
  res.send("API is running...");
});

<<<<<<< HEAD


=======
>>>>>>> 9ec866ad232901ba253445aadd066978180bad85
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
