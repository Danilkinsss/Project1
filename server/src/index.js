import express, { Router } from "express";
import cors from "cors";
import { getPosts, makePost } from "./controllers/post.controller.js";

const app = express();
app.use(cors());
app.use(express.json());

const router = Router();
app.use("/posts", router);

router.get("/", getPosts);
router.post("/", makePost);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`🍕🚀🎈 Server running on http://localhost:${PORT}/`);
});
