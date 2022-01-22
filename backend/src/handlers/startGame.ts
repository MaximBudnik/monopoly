import {Handler} from "../types";

export const startGameHandler: Handler = (io, socket,roomManager) => {
  socket.on('startGame', () => {
    const room = roomManager.getRoom(socket.user.room)
    room.startGame()
    io.to(socket.user.room).emit('startGame', room.gameStartDate.toString());
  });

}
