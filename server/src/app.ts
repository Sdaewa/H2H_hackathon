import express from "express";
//import passport from "passport";
import {router} from "./routes/index";

export const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/", router);
