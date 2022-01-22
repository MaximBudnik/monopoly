import * as express from "express";
import {createServer} from "http";
import {Server} from "socket.io";
import {ClientToServerEvents, InterServerEvents, ServerToClientEvents, SocketData} from "./socketSchema";
import {coreHandler} from "./handlers/core";
import {getToken, verifyToken} from "./auth";
import {chatHandler} from "./handlers/chat";
import {startGameHandler} from "./handlers/startGame";
import {RoomManager} from "./logic/RoomManager";

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

const roomManager = new RoomManager(io)

const onConnection = (socket) => {
  coreHandler(io, socket, roomManager);
  chatHandler(io, socket, roomManager);
  startGameHandler(io, socket, roomManager);
}

io.on("connection", onConnection);

httpServer.listen(process.env.PORT || 8080);
