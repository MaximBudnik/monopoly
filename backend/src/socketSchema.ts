import {CardPresentation, Field, Message, PlayerPresentation, User} from "./types";


export interface ServerToClientEvents {
  userJoinedRoom: (user: Pick<User, 'username' | 'id'>) => void;
  chat: (message: Message) => void;
  startGame: (startDate: string) => void
  field: (field: Field) => void
  players: (players:Array<PlayerPresentation>,  turnStartTime: string) => void
  rollDices: (dices:[number,number])=>void
}

export interface ClientToServerEvents {
  join: (roomId: string) => void;
  chat: (message: string) => void;
  startGame: () => void

  rollDices: ()=>void
}

export interface InterServerEvents {
}

export interface SocketData {
  username: string;
  id: string;
}
