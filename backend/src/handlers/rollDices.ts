import {Handler} from "../types";

export const rollDicesHandler: Handler = (io, socket,roomManager) => {
  socket.on('rollDices', () => {
    const room = roomManager.getRoom(socket.user.room)
    if(!room || !room.playerHasAccess(socket.user.id)) return
    const dices = room.rollDices()
    io.to(socket.user.room).emit('rollDices', dices);
  });

}
