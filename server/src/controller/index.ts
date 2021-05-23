import {Request, Response} from "express";

export const handleGetIndex = (req: Request, res: Response) => {
    res.json({"msg":"Hello from server"});
}
