import { model,Schema } from "mongoose"
import { Keyboard } from "../interfaces/Keyboard"
const KeyboardScheme=new Schema<Keyboard>({
    color:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
    },
    brand:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        values:['Logitech','RedDragon','Genius','Asus ROG']
    },
    size:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    wireless:{ 
        type:Boolean,
        required:true
    }

})
const KeyboardModel=model('keyboards',KeyboardScheme)
export default KeyboardModel;
