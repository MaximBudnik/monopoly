import {Property} from "./Field/Property";
import {TypedSocket, UserWithSocket} from "../types";

export class Player {
  get id(): string {
    return this._id;
  }
  get username(): string {
    return this._username;
  }
  money: number
  private propetries: Array<Property> = []
  color: string
  private readonly _username: string
  private readonly _id: string
  readonly socket: TypedSocket

  constructor(user:UserWithSocket) {
    this._username = user.username
    this._id = user.id
    this.socket = user.socket
  }

  get cardPresentation(): {
    username: string,
    color: string
  } {
    return {
      color: this.color,
      username: this._username
    }
  }
}
