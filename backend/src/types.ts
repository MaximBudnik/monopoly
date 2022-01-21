import {Server, Socket} from "socket.io";
import {ClientToServerEvents, InterServerEvents, ServerToClientEvents, SocketData} from "./socketSchema";

export type User = {
  username: string
  id: string
  room: string
}

export type Message = {
  sender: string;
  time: string;
  text: string;
  system?:boolean
}

export type TypedSocket = Socket<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>

export type UserWithSocket = User & { socket: TypedSocket }

export type TypedServer = Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>

export type Handler = (io: TypedServer, socket: TypedSocket & { user: User }) => void
