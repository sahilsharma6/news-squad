import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

// Route imports
import categoryRoutes from "./routes/categoryRoutes.js";
import imageUploadRoute from "./routes/imageUpload.js";
import postRoutes from "./routes/postRoutes.js";
import authRoute from "./routes/authRoute.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const port = process.env.PORT || 5000;
connectDB();

const app = express();

// Middlewares
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json({limit: "10mb", extended: true}))
// app.use(express.urlencoded({limit: "10mb", extended: true, parameterLimit: 50000}))
app.use(cookieParser());


app.use("/api/auth", authRoute);
app.use("/api/posts", postRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/upload-image", imageUploadRoute);
app.use("/api", userRoutes);


const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
