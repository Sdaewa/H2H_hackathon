import * as http from "http";
import { app } from "./src/app";

const port = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(port, () =>
  console.log(`server is listening on http://localhost:${port}`)
);
