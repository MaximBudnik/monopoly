import * as express from "express";
import {createServer} from "http";
import {Server} from "socket.io";
import {ClientToServerEvents, InterServerEvents, ServerToClientEvents, SocketData} from "./socketSchema";
import {log} from "./logger";

const app = express();
const httpServer = createServer(app);
const io =  new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(httpServer, {
  cors: {
    origin: "http://localhost:3000"
  }
});

io.on("connection", (socket) => {
  log(`Connected: ${socket.id}`)

  socket.on('disconnect', () =>
    log(`Disconnected: ${socket.id}`));

  socket.on('join', (username, roomId) => {
    log(`${username} joining ${roomId}`);
    socket.join(roomId);
  })

  socket.on('chat', (message, roomId) => {
    console.log(`msg: ${message}, room: ${roomId}`);
    io.to(roomId).emit('chat', message);
  });

});

httpServer.listen(8080);
