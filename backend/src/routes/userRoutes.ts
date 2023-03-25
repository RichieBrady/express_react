import express, {Request, Response} from "express";
import userControllers from "../controllers/userControllers.js";


const router = express.Router();

/* GET users listing. */
router.route('/')
    .get(userControllers.getAllUsers)
    .post(userControllers.createNewUser)
    .patch(userControllers.updateUser)
    .delete(userControllers.deleteUser)

export default router;
