import {Handler} from "../types";
import {logToRoom} from "../logger";


export const coreHandler: Handler = (io, socket,roomManager) => {
  const log = logToRoom(io,socket.user.room )


  socket.on('disconnect', () => {
    log(`${socket.user.username} left`);
    socket.leave(socket.user.room)
    const room = roomManager.getRoom(socket.user.room)
    if(!room) return
    room.removeUser(socket.user)
    if (room.isEmpty()) {
      roomManager.deleteRoom(room.name)
    }
  });

  socket.on('join', (roomId) => {
    log(`${socket.user.username} joined`);
    socket.join(roomId);
    if (!roomManager.getRoom(roomId)) {
      roomManager.createRoom(roomId)
    }
    roomManager.getRoom(roomId).joinUser({...socket.user, socket:socket})
  })

}
