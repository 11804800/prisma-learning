import prisma from "../DB/db.config.js";

export const createPost=async (req,res)=>{
    const {userId,title,description}=req.body;
    const newPost=await prisma.post.create({
        data:{
            title:title,
            description:description,
            user_id:Number(userId)
        }
    });

    res.status(201).json({newPost:newPost});
}


export const UpdatePost=async (req,res)=>{
    const {title,description}=req.body;
    const postId=req.params.Id;

    await prisma.post.update({
        where:{
            id:Number(postId)
        },
        data:{
            title:title,
            description:description,
        }
    });
    res.status(200).json({message:"Post Updated Successfully"});
}


export const FindPost=async(req,res)=>{
    const data=await prisma.post.findMany({
        orderBy:{
            id:"desc"
        },
        include:{
            comment:true
        }
    });
    res.status(200).json({data:data});
}


export const FindPostById=async (req,res)=>{
    const postId=req.params.Id;
    const data=await prisma.post.findFirst({
        where:{
            id:Number(postId)
        }
    });
    res.status(200).json({data:data});
}


export const DeletePost=async (req,res)=>{
    const postId=req.params.Id;
    await prisma.post.delete({
        where:{
            id:Number(postId)
        }
    });
    res.status(200).json({message:"Post Deleted Successfully"});
}