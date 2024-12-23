import express from "express";
import { createComment, DeleteComment, FindComment, FindCommentById, UpdateComment } from "../Controller/Comment.controller.js";
const CommentRouter=express.Router();




CommentRouter.post("/",createComment);
CommentRouter.put("/:Id",UpdateComment);
CommentRouter.get("/",FindComment);
CommentRouter.get("/:Id",FindCommentById);
CommentRouter.delete("/:Id",DeleteComment);


export default CommentRouter;



