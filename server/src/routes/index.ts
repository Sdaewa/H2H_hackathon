import {Router} from "express";
import {handleGetIndex} from "../controller/index";

export const router = Router();

router.get("/", handleGetIndex)
router.post("/chat", handleGetIndex)
