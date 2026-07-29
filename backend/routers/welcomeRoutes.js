import express from "express";
import { getWelcome  } from "../controllers/welcomeController.js";

const router = express.Router();


router.get('/', getWelcome );

export default router;