import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    featuredImage: { type: String },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
    views: {type: Number, default:0},
    likes :{type:Number, default:0},
    tags: [{type:String}],
    userId : [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    introDescription :{type:String }
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
