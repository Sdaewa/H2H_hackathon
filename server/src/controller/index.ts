import { Request, Response } from "express";
import { io } from "../../../server";

export const handleGetIndex = (req: Request, res: Response) => {
	res.json({ msg: "Hello from server" });
};

export const handlePostChat = (req: Request, res: Response) => {
	io.on("connection", (socket) => {
		socket.on("new-user", (msg) => {
			socket.broadcast.emit("new-user-join", msg);
		});
        socket.on("chat-message", (msg) => {
            socket.broadcast.emit("new-chat-message", msg)
        })
	});
	res.redirect("http://localhost:3000/chat");
};
