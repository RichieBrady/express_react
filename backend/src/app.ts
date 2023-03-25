import mongoose from "mongoose";
import cors from 'cors';
import express from "express";
import path from "path";
import logger from 'morgan';
import createError from 'http-errors';
import cookieParser from 'cookie-parser';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

import indexRouter from './routes/index.js';

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'pug')
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);



// catch 404 and forward to error handle
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

export default app


