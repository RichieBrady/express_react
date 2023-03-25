import {corsAllowedOrigins} from "./corsAllowedOrigins.js";
import cors from 'cors';

export const corsOptions: cors.CorsOptions = {
    origin: (origin, callback) => {
        if (!origin || corsAllowedOrigins.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
}