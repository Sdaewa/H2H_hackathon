import express from "express";
import passport from "passport";

export const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))