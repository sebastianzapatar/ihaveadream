import { Keyboard } from "../interfaces/Keyboard";
import KeyboardModel from "../models/teclados.models";

let Keyboards: Keyboard[] = [{
    color:"Carbon",
    brand:"Logitech G213",
    size:100,
    price:80,
    wireless:false
},
{
    color:"Black",
    brand:"Logitech tkl 255",
    size:65,
    price:50,
    wireless:false
},
{
    color:"White",
    brand:"Red Dragon Kumara k2552",
    size:65,
    price:45,
    wireless:true
},
{
    color:"White",
    brand:"VSG",
    size:75,
    price:100,
    wireless:false
}]

export const getKeyBoards=async()=>{
    try{
        const response=await KeyboardModel.find();
        return response;
    }
    catch(error){  
        console.log(error);
    }
}
export const getKeyBoard=async(id:string)=>{
    const response=await KeyboardModel.findOne({_id:id});
        return response;
}
export const createKeyboard=async(keyboard:Keyboard)=>{
    const responseInsert=await KeyboardModel.create(keyboard);
    return responseInsert;
}
export const deleteKeyboard=async(brand:string)=>{
    Keyboards=Keyboards.
    filter(keyboard=>keyboard.brand!==brand);
    return Keyboards;

}
