import express from "express";
import { createPost, DeletePost, FindPost, FindPostById, UpdatePost } from "../Controller/Post.controller.js";
const PostRouter=express.Router();

PostRouter.post("/",createPost);
PostRouter.put("/:Id",UpdatePost);
PostRouter.get("/",FindPost);
PostRouter.get("/:Id",FindPostById);
PostRouter.delete("/:Id",DeletePost);

export default PostRouter;