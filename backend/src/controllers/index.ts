import {Request, Response} from "express";
import path from "path";
import {fileURLToPath} from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getRandomNumber = (req: Request, res: Response) => {
    const MAX: number = 100;
    const randomNumber: number = Math.floor(Math.random() * MAX);
    console.log(randomNumber)
    res.status(200).json({'random': randomNumber});
}

export const getUrlMatch = (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
}
