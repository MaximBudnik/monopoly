import * as express from "express";
import {createServer} from "http";
import {Server} from "socket.io";
import {ClientToServerEvents, InterServerEvents, ServerToClientEvents, SocketData} from "./socketSchema";
import {coreHandler} from "./handlers/core";
import {getToken, verifyToken} from "./auth";
import {chatHandler} from "./handlers/chat";

const cors = require('cors');

const app = express();
app.use(cors())
app.get('/getToken/:room/:username', (req, res) => {
  try {
    res.json(getToken(req.params.username, req.params.room))
  } catch (e) {
    res.status(400).json(e)
  }
})

const httpServer = createServer(app);
const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(httpServer, {
  cors: {
    origin: "*"
  }
});

io.use((socket, next) => {
  try {
    if (!socket.handshake.auth.token) {
      throw new Error()
    }
    // @ts-ignore
    socket.user = verifyToken(socket.handshake.auth.token);
    next();
  } catch (e) {
    next(new Error('Authentication error'));
  }
})


const onConnection = (socket) => {
  coreHandler(io, socket);
  chatHandler(io, socket);
}

io.on("connection", onConnection);

httpServer.listen(process.env.PORT || 8080);
