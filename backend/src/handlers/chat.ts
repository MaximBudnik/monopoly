import {Handler} from "../types";
import {connectedUsers} from "./core";

export const chatHandler: Handler = (io, socket) => {
  socket.on('chat', (text, roomId) => {
    console.log(`msg: ${text}, room: ${roomId}`);

    const privateUsers = text.split(' ').filter(s => s.startsWith('@'))
    console.log(privateUsers)
    if (privateUsers.length) {
      privateUsers.push(socket.user.username)
      privateUsers.forEach(username => {
        connectedUsers[username]?.emit('chat', {
          text: '<private> ' + text,
          sender: socket.user.username,
          time: new Date().toLocaleTimeString()
        });
      })
      return;
    }
    console.log('he')
    io.to(roomId).emit('chat', {text, sender: socket.user.username, time: new Date().toLocaleTimeString()});
  });

}
