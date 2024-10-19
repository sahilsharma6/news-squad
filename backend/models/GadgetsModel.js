import mongoose from "mongoose";

const GadgetsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    link: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    img: { type: String },
    excerpt: { type: String, required: true }
  },
  { timestamps: true }
);

const GadgetsModel = mongoose.model("Gadgets", GadgetsSchema);

export default GadgetsModel;
