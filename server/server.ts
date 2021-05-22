import * as http from "http";
import * as express from "express";

require("./src/db/mongoose");
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = process.env.PORT || 5000;

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("a user connected");
});

server.listen(port, () =>
  console.log(`server is listening on http://localhost:${port}`)
);
