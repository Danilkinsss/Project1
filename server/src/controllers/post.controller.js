import { posts } from "../models/data.js";

export function getPosts(req, res) {
  res.send(posts);
}

export function makePost(req, res) {
  const { text, author } = req.body;

  if (!text || text.length > 250) {
    const error = new Error("Message must be between 1 and 250");
    return res.status(400).json({ msg: error.message });
  }

  const newPost = {
    id: posts.length,
    text,
    author,
    postDate: new Date(),
  };

  posts.unshift(newPost);

  res.status(201).json({ msg: "Posted successfully" });
}
