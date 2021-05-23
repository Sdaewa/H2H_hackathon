import {Request, Response} from "express";

export const handleSignUp = (req: Request, res: Response) => {
    console.log(req.body);
    res.json({"msg":"form is submitted successfully"});
}
