import io from 'socket.io-client';
import {ServerToClientEvents, ClientToServerEvents} from '../../../backend/src/socketSchema';
import {Socket} from "socket.io-client/build/esm/socket";
import {env} from "../constants/env";

let socket: Socket<ServerToClientEvents, ClientToServerEvents>;
let roomId: string

export const getRoomId = () => roomId

export const initiateSocket = (username: string, _roomId: string) => {
    socket = io(env.apiUrl);
    roomId = _roomId
    socket.emit('join', username, roomId);
}
export const disconnectSocket = () => {
    socket.disconnect();
}

export const subscribeToChat = (cb: (message: string) => void) => {
    socket.on('chat', message => {
        console.log('Websocket event received!');
        return cb(message);
    });
}

export const sendMessage = (message: string) => {
    socket.emit('chat', message, roomId);
}
