import {logEvents} from "./logger.js";
import {Request, Response, NextFunction} from "express";

export const errorHandler = (err: { name: any; message: any; status: any; }, req: Request, res: Response, next: NextFunction) => {
    logEvents(`${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, 'errLog.log')
    console.log('Error Logged')
    const status = res.statusCode ? res.statusCode : 500

    res.status(status)
    res.json({message: err.message})
}