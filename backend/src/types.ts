import {Server, Socket} from "socket.io";
import {ClientToServerEvents, InterServerEvents, ServerToClientEvents, SocketData} from "./socketSchema";
import {RoomManager} from "./logic/RoomManager";

export type User = {
  username: string
  id: string
  room: string
}

export type Message = {
  sender: string;
  time: string;
  text: string;
  system?: boolean
}

export type CardPresentation = {
  id: number,
  name: string,
  imgUrl?: string,
  groupColor?: string
  price?: number
  playerColor?: string
  players: Array<{ username: string, color: string }>
}

export type PlayerPresentation = {
  id: string
  username: string,
  color: string,
  current: boolean
  bankrupt: boolean
}

export type Field = Array<CardPresentation>

export type TypedSocket = Socket<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>

export type SocketWithUser = TypedSocket & { user: User }

export type UserWithSocket = User & { socket: TypedSocket }

export type TypedServer = Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>

export type Handler = (io: TypedServer, socket: SocketWithUser, roomManager:RoomManager) => void



