import { Router } from "express";
import { upload } from "../utils/multer.js";

const router = Router();

router.post("/", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const imageUrl = `http://localhost:5000/uploads/${req.file.filename}`;
  console.log(imageUrl);
  res.json({ imageUrl });
});
export default router;
