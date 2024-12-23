import express from "express";
import { createUser, UpdateUser } from "../Controller/User.contoller.js";
const UserRouter=new express.Router();

UserRouter.post("/",createUser);
UserRouter.put("/:Id",UpdateUser);

export default UserRouter;