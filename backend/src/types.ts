import {Server, Socket} from "socket.io";
import {ClientToServerEvents, InterServerEvents, ServerToClientEvents, SocketData} from "./socketSchema";

export type User = {
  username: string
  id: string
}

export type Message = {
  sender: string;
  time: string;
  text: string;
}

export type Handler = (io: Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>,
                       socket: Socket<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData> & {user:{
                           username: string
                           id: string
                         }}) => void
