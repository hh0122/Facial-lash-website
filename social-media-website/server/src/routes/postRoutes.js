import { Router } from "express";
import { createPost, getFeed } from "../controllers/postController.js";
import auth from "../middleware/auth.js";

const router = Router();

router.get("/", getFeed);
router.post("/", auth, createPost);

export default router;
