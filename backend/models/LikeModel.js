import mongoose from "mongoose";

const likeSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
    like: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Like = mongoose.model("Like", likeSchema);

export default Like;
