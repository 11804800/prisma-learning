import express from "express";
import { createUser, FindUserById, FindUsers, UpdateUser } from "../Controller/User.contoller.js";
const UserRouter=new express.Router();

UserRouter.post("/",createUser);
UserRouter.put("/:Id",UpdateUser);
UserRouter.get("/",FindUsers);
UserRouter.get("/:Id",FindUserById);

export default UserRouter;