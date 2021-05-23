import { Router } from "express";
import { handleSignUp } from "../controller/user";

export const userRouter = Router();

userRouter.post("/signup", handleSignUp);
