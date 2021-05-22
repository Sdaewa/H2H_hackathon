import * as http from "http";
import { app } from "./src/app";

const port = process.env.PORT || 5000;
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("a user connected");
});

server.listen(port, () =>
  console.log(`server is listening on http://localhost:${port}`)
);
