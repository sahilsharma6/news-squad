// export const Category = [
//   {
//     categoryName: "Politics",
//     description:
//       "News related to government, elections, and political affairs.",
//   },
//   {
//     categoryName: "Business",
//     description: "Financial markets, corporate news, and economic updates.",
//   },
//   {
//     categoryName: "Technology",
//     description: "Latest advancements in tech, gadgets, and innovation.",
//   },
//   {
//     categoryName: "Health",
//     description:
//       "News about medical breakthroughs, healthcare policies, and wellness tips.",
//   },
//   {
//     categoryName: "Science",
//     description:
//       "Updates on scientific research, discoveries, and space exploration.",
//   },
//   {
//     categoryName: "Sports",
//     description: "Coverage of sports events, players, and major tournaments.",
//   },
//   {
//     categoryName: "Entertainment",
//     description: "Celebrity news, movies, TV shows, and pop culture.",
//   },
//   {
//     categoryName: "World",
//     description: "International news and global events.",
//   },
//   {
//     categoryName: "Lifestyle",
//     description: "Fashion, travel, food, and personal development.",
//   },
//   {
//     categoryName: "Environment",
//     description: "Climate change, wildlife, and sustainability.",
//   },
//   {
//     categoryName: "Education",
//     description: "News on schools, universities, and education policies.",
//   },
//   {
//     categoryName: "Opinion",
//     description: "Editorials, opinions, and analysis pieces.",
//   },
// ];
import mongoose from "mongoose";

const CategoriesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    link: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    img: { type: String },
    excerpt: { type: String, required: true }
  },
  { timestamps: true }
);

const CategoriesModel = mongoose.model("Categories", GadgetsSchema);

export default CategoriesModel;

