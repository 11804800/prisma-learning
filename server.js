import express from "express";
import UserRouter from "./routes/user.routes.js";
import PostRouter from "./routes/post.routes.js";
import CommentRouter from "./routes/comment.routes.js";

const app=new express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/user",UserRouter);
app.use("/post",PostRouter);
app.use("/comment",CommentRouter);

app.listen("3000",()=>{
    console.log("Up and running at 3000");
});