import { encrypt,verify } from '../utils/bcrypts.util';
import { User } from '../interfaces/User';
import UserModel from '../models/User.model';
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
    return newUser;
}