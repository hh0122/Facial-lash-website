import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    content: { type: String, required: true },
    category: { type: String, default: "General" },
    likes: { type: Number, default: 0 },
    comments: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export default mongoose.model("Post", postSchema);
