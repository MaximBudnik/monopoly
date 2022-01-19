import {User} from "./types";

export interface ServerToClientEvents {
  userJoinedRoom: (user: Pick<User, 'username' | 'id'>) => void;
  chat: (message:string) => void;
}

export interface ClientToServerEvents {
  join: (username:string, roomId: string) => void;
  chat: (message:string, roomId: string) => void;
}

export interface InterServerEvents {
}

export interface SocketData {
  username: string;
}
