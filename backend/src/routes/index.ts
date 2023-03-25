import express from 'express';
import { getRandomNumber, getUrlMatch } from "../controllers/index.js";

const router = express.Router();


router.get('^/$|/index(.html)?', getUrlMatch)

/* GET home page. */
router.get('/random', getRandomNumber);



export default router;
