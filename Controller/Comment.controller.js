import prisma from "../DB/db.config.js";

export const createComment=async (req,res)=>{
    const {userId,comment,postId}=req.body;


    //updating comment count on post
    await prisma.post.update({
        where:{
            id:Number(postId)
        },
        data:
        {
            comment_count:{
                increment:1
            }
        }
    });

    const newComment=await prisma.comment.create({
        data:{
            post_id:Number(postId),
            comment:comment,
            user_id:Number(userId)
        }
    });

    res.status(201).json({newComment:newComment});
}


export const UpdateComment=async (req,res)=>{
    const {comment}=req.body;
    const commentId=req.params.Id;

    await prisma.comment.update({
        where:{
            id:commentId
        },
        data:{
            comment:comment
        }
    });
    res.status(200).json({message:"Comment Updated Successfully"});
}


export const FindComment=async(req,res)=>{
    const data=await prisma.comment.findMany({});
    res.status(200).json({data:data});
}


export const FindCommentById=async (req,res)=>{
    const commentId=req.params.Id;
    const data=await prisma.comment.findFirst({
        where:{
            id:commentId
        }
    });
    res.status(200).json({data:data});
}


export const DeleteComment=async (req,res)=>{
    const commentId=req.params.Id;

    await prisma.post.update({
        where:{
            id:Number(postId)
        },
        data:
        {
            comment_count:{
                decrement:1
            }
        }
    });

    await prisma.comment.delete({
        where:{
            id:commentId
        }
    });
    res.status(200).json({message:"Post Deleted Successfully"});
}