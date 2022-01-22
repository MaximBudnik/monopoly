import {Handler} from "../types";

export const chatHandler: Handler = (io, socket,roomManager) => {
  socket.on('chat', (text) => {
    const targetUsernames = text.split(' ').filter(s => s.startsWith('@')).map(str => str.substring(1))
    if (targetUsernames.length) {
      targetUsernames.push(socket.user.username)
      roomManager.getRoom(socket.user.room).players.forEach(user => {
        if (targetUsernames.includes(user.username))
          user.socket.emit('chat', {
            text,
            sender: socket.user.username+ ' (private)',
            time: new Date().toLocaleTimeString()
          });
      })
      return;
    }
    io.to(socket.user.room).emit('chat', {text, sender: socket.user.username, time: new Date().toLocaleTimeString()});
  });

}
