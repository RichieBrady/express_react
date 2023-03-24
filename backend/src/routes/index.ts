import express from 'express';
import { getRandomNumber } from "../controllers/index.js";

const router = express.Router();


/* GET home page. */
router.get('/random', getRandomNumber);

export default router;
