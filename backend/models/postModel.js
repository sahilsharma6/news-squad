import mongoose from "mongoose";
import slugify from "slugify";

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    param: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    image: { type: String },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    tags: [{ type: String }],
    userId: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    introDescription: { type: String },
  },
  { timestamps: true }
);

postSchema.pre("validate", function (next) {
  if (!this.param && this.title) {
    this.param = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

const Post = mongoose.model("Post", postSchema);

(async () => {
  try {
    const postsToUpdate = await Post.find({
      $or: [{ param: { $exists: false } }, { param: null }, { param: "" }],
    });

    for (const post of postsToUpdate) {
      post.param = slugify(post.title, { lower: true, strict: true });
      await post.save();
      console.log(`✅ [Model Load] Updated slug for post: "${post.title}"`);
    }
  } catch (err) {
    console.error("❌ Error updating slugs in model:", err.message);
  }
})();

export default Post;
