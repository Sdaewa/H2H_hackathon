import * as passport from "passport";
import { Request, Response, NextFunction } from "express";
import { MyUser } from "./entity/user";

interface IReqBody {
	name: string;
	email: string;
	password: string;
}

export const handleSignUp = (req: Request, res: Response) => {
	const { name, email, password }: IReqBody = req.body;
	const newUser = new MyUser(name, email, password);
    newUser.validate();
    newUser.save();
	res.redirect("http://localhost:3000/");
};

export const handleLogIn = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate("local", {
        failureRedirect:"http://localhost:3000/",
        successRedirect:"http://localhost:3000/chat"
    })(req, res, next)
}
