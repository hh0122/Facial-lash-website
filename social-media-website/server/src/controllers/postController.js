import Post from "../models/Post.js";

export const getFeed = async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 }).limit(50);
  res.json(posts);
};

export const createPost = async (req, res) => {
  const { content, category } = req.body;
  const post = await Post.create({
    author: req.user.id,
    content,
    category
  });
  res.status(201).json(post);
};
