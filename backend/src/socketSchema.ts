import {CardPresentation, Field, Message, User} from "./types";


export interface ServerToClientEvents {
  userJoinedRoom: (user: Pick<User, 'username' | 'id'>) => void;
  chat: (message: Message) => void;
  startGame: (startDate: string) => void
  field: (cards: Field) => void
}

export interface ClientToServerEvents {
  join: (roomId: string) => void;
  chat: (message: string) => void;
  startGame: () => void
}

export interface InterServerEvents {
}

export interface SocketData {
  username: string;
  id: string;
}
