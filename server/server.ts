import { createServer } from "http";
import { app } from "./src/app";
import { Server } from "socket.io";

const port = process.env.PORT || 5000;
const server = createServer(app);
export const io = new Server(server);

server.listen(port, () => console.log(`server is listening on http://localhost:${port}`))
