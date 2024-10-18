import path from "path";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
const port = process.env.PORT || 5000;
connectDB();
const app = express();
import categoryRoutes from "./routes/categoryRoutes.js";
import imageUploadRoute from "./routes/imageUpload.js";
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend domain
    credentials: true, // Allow credentials
  })
);
// app.use(cors({
//   origin: 'https://travelsquads.com',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   credentials: true
// }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/categories", categoryRoutes);
app.use("/api/upload-image", imageUploadRoute);
app.get("/", (req, res) => {
  res.send("API is running...");
});

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
