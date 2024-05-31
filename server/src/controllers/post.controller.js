import { createPost, getAll } from "../models/post.model.js";

export async function getPosts(req, res) {
  const data = await getAll();
  const sortedData = data.sort((a, b) => {
    return Number(new Date(b.postDate)) - Number(new Date(a.postDate));
  });
  res.send(sortedData);
}

export async function makePost(req, res) {
  const { text, author } = req.body;

  if (!text || text.length > 250) {
    const error = new Error("Message must be between 1 and 250");
    return res.status(400).json({ msg: error.message, success: false });
  }

  const newPost = {
    text,
    author,
  };

  await createPost(newPost);

  res.status(201).json({ msg: "Posted successfully", success: true });
}
