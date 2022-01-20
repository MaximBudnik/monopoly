import {Handler} from "../types";
import {log} from "../logger";

export const connectedUsers = {

}
export const coreHandler:Handler = (io, socket) => {
  log(`Connected: ${socket.id}`)

  socket.on('disconnect', () => {
    log(`Disconnected: ${socket.id}`);
    connectedUsers[socket.user.username] = null
    // socket.leave()
  });

  socket.on('join', (roomId) => {
    log(`${socket.user.username} joining ${roomId}`);
    socket.join(roomId);
    connectedUsers[socket.user.username] = socket
  })

}
