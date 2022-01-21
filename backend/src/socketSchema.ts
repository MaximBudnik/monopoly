import {Message, User} from "./types";

export interface ServerToClientEvents {
  userJoinedRoom: (user: Pick<User, 'username' | 'id'>) => void;
  chat: (message:Message) => void;
}

export interface ClientToServerEvents {
  join: (roomId: string) => void;
  chat: (message:string) => void;
}

export interface InterServerEvents {
}

export interface SocketData {
  username: string;
  id: string;
}
