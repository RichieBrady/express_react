import {json, Request, Response} from "express";

export const getRandomNumber = (req: Request, res: Response) => {
    const MAX: number = 100;
    const randomNumber: number = Math.floor(Math.random() * MAX);
    console.log(randomNumber)
    res.status(200).json({'random': randomNumber});
}
