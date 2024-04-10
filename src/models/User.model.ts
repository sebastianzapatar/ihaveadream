import { model,Schema } from 'mongoose';
import { User } from '../interfaces/User';
const UserSchema = new Schema<User>({
    name:{
        Type:String
    },
    description:{
        type:String,
        default:'Odiados por el profesor con todo su ser'
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:8
    }
})
const UserModel = model('User',UserSchema);
export default UserModel;
