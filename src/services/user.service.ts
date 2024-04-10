import { encrypt,verify } from '../utils/bcrypts.util';
import { User } from '../interfaces/User';
import UserModel from '../models/User.model';
import { Auth } from '../interfaces/Auth';
import { signToken } from '../utils/jwt.util';
export const registerUser=async(authUser:User)=>{
    const {email,password,description,name}=authUser;
    console.log(password);
    const exist=await UserModel.findOne({email});
    if(exist){
        return 'Email already exist fucking idiot';
    }
    const passwordHash=await encrypt(password);
    console.log(passwordHash);
    const newUser=await UserModel.create({email,password:passwordHash,name,description});
    console.log(newUser);
    return newUser;
}
export const loginUserService=async(authUser:Auth)=>{
    const {email,password}=authUser;
    const userPass=await UserModel.findOne({email});
    if(!userPass){
        return 'User not exist';
    }
    const passwordHash=userPass.password;
    const isCorrect=await verify(password,passwordHash);
    if(!isCorrect){
        return 'Invalid credentials ಥ_ಥ';
    }
    const token=await signToken(email);
    const user={email,
        message:'Success',
        token};
    return user;
}