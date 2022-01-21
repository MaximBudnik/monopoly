import {Room} from "./Room";


interface IRoomManager {
  createRoom(name: string): Room | void

  getRoom(name: string): Room

  deleteRoom(name: string): void
}


class RoomManager implements IRoomManager {

  createRoom = name => {
    if (this[name]) throw new Error('Room is already created')
    this[name] = new Room(name)
  };

  getRoom = name => this[name] as Room

  deleteRoom = name => this[name] = undefined
}

export default new RoomManager()
