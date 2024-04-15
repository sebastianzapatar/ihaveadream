import { NextFunction,Request,Response } from 'express';

export const logMiddleware=(req:Request,res:Response,next:NextFunction)=>{

     console.log('Soy un middleware yo defino tu futuro (⌐■_■)');
     next();
}
export const otroMiddleware=(req:Request,res:Response,next:NextFunction)=>{

    console.log('Soy un middleware yo defino tu futuro (⌐■_■) otro');
    next();
}