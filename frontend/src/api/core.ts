import io from 'socket.io-client';
import {ServerToClientEvents, ClientToServerEvents} from '../../../backend/src/socketSchema';
import {Socket} from "socket.io-client/build/esm/socket";
import {config} from "../constants/config";

let socket: Socket<ServerToClientEvents, ClientToServerEvents>;
let roomId: string

export const getRoomId = () => roomId
export const getSocket = () => socket

export const connectSocket = (_roomId: string) => {
    socket = io(config.apiUrl,{auth:{token: sessionStorage.getItem('token')}});
    roomId = _roomId
    socket.emit('join', roomId);
}

export const disconnectSocket = () => {
    socket.disconnect();
}
