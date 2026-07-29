import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { getEmp , addEmployee , getDetails , deleteEmp , putEmp  } from "../controllers/empController.js";

const router = express.Router();


router.get("/", authMiddleware, getEmp);
router.post("/", authMiddleware, addEmployee);
router.get("/details/:id", authMiddleware, getDetails);
router.delete("/:id", authMiddleware, deleteEmp);
router.put("/:id", authMiddleware, putEmp);

export default router;

