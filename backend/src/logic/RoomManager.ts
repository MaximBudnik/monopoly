import {Room} from "./Room";
import {sendFieldToRoom, sendPlayersToRoom, sendWinnerToRoom} from "../handlers/functions";
import {TypedServer} from "../types";


interface IRoomManager {
  createRoom(name: string): Room | void

  getRoom(name: string): Room

  deleteRoom(name: string): void
}


export class RoomManager implements IRoomManager {

  private readonly _io: TypedServer

  constructor(io: TypedServer) {
    this._io = io;
  }

  createRoom = name => {
    if (this[name]) throw new Error('Room is already created')
    this[name] = new Room(name,
      sendFieldToRoom(this._io, name),
      sendPlayersToRoom(this._io, name),
      sendWinnerToRoom(this._io, name),
      () => this.deleteRoom(name))
  };

  getRoom = name => this[name] as Room

  deleteRoom = name => {
    this._io.in(name).socketsLeave(name)
    return this[name] = undefined;
  }
}
