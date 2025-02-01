import { NextFunction, Request, Response } from "express";
import { HttpException } from "../exceptions/httpException";

export const ErrorMiddleware = (error:HttpException, req:Request, res:Response, next:NextFunction) =>{
    try {
        const status = error.status || 500
        const message = error.message || 'Somthing want wrong'
        res.status(status).json({message})
        
    } catch (error) {
        next(error)
    }
}