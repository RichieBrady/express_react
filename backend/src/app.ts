import * as dotenv from 'dotenv'

dotenv.config()

import cors from 'cors';
import {corsOptions} from "./config/corsOptions.js";
import {connectDB} from "./config/databaseConfig.js";
import mongoose from "mongoose";
import express from "express";
import path from "path";
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

connectDB()

import {errorHandler} from "./middleware/errorHandler.js";
import indexRouter from './routes/index.js';
import userRoutes from "./routes/userRoutes.js";

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'pug')
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions));

app.use('/', indexRouter);
app.use('/users', userRoutes)

app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({message: '404 Not Found'})
    } else {
        res.type('txt').send('404 Not Found')
    }
})

app.use(errorHandler)

export default app


