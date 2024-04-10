import { Request,Response } from "express";
import { registerUser } from "../services/user.service";
import { User } from "../interfaces/User";
export const registerUserController=async (req:Request,res:Response)=>{
    const auth:User=req.body;
    const registeredUser=await registerUser(auth);
    res.status(201).send(registeredUser);
}   