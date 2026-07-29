import express from "express";
import {postUser , getCreateUser , postLogin , postLogut} from "../controllers/userController.js"
import bcrypt from "bcrypt";
const router = express.Router();

router.get("/",getCreateUser);

router.post("/" , postUser);


router.post("/login" , postLogin);

router.post("/logout" , postLogut)

export default router;