import prisma from "../DB/db.config.js";

export const createUser=async (req,res)=>{
    const {name,email,password}=req.body;
    //finding user
    const findUser= await prisma.user.findUnique({
        where:{
            email:email
        }
    });
    if(findUser)
    {
        return res.status(403).json({message:"Email already in Use "});
    }
    const newUser=await prisma.user.create({
        data:{
            name:name,
            email:email,
            password:password
        }
    });

    res.status(201).json({newUser:newUser});
}


export const UpdateUser=async (req,res)=>{
    const {name,email,password}=req.body;
    const userId=req.params.Id;

    await prisma.user.update({
        where:{
            id:Number(userId)
        },
        data:{
            name:name,
            email:email,
            password:password
        }
    });
    res.status(200).json({message:"User Updated Successfully"});
}


export const FindUsers=async(req,res)=>{
    const data=await prisma.user.findMany({});
    res.status(200).json({data:data});
}


export const FindUserById=async (req,res)=>{
    const userId=req.params.Id;
    const data=await prisma.user.findFirst({
        where:{
            id:Number(userId)
        }
    });
    res.status(200).json({data:data});
}


export const DeleteUser=async (req,res)=>{
    const userId=req.params.Id;
    const data=await prisma.user.delete({
        where:{
            id:Number(userId)
        }
    });
    res.status(200).json({message:"User Deleted Successfully"});
}