import { Router } from "express";
import { handleSignUp, handleLogIn } from "../controller/user";

export const userRouter = Router();

userRouter.post("/signup", handleSignUp);
userRouter.post("/signin", handleLogIn);
