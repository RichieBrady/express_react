import app from "./app.js";
import mongoose from "mongoose";
import {logEvents} from "./middleware/logger.js";

mongoose.connection.once('open', () => {
    console.log('Connected to DB')
    app.listen(3000, () => {
        console.log("Server is running on port " + 3000);
    });
})

mongoose.connection.on('error', err => {
    console.log(err)
    logEvents(`${err.no}\t${err.code}\t${err.syscall}\t${err.hostname}`, 'dbErrorLog.log')
})

