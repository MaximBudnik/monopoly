import {Property} from "./Field/Property";
import {PlayerPresentation, TypedSocket, UserWithSocket} from "../types";
import {playerColors} from "../constants/colors";

export class Player {
  get bankrupt(): boolean {
    return this._bankrupt;
  }
  get id(): string {
    return this._id;
  }

  get username(): string {
    return this._username;
  }

  money: number
  private propetries: Array<Property> = []
  color: string
  private _bankrupt: boolean = false
  private readonly _username: string
  private readonly _id: string
  readonly socket: TypedSocket

  constructor(user: UserWithSocket) {
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

  getPlayerPresentation = (current: boolean): PlayerPresentation => ({
    id: this._id,
    color: this.color,
    username: this.username,
    bankrupt: this._bankrupt,
    current
  });

  setColor = (id: number) => this.color = playerColors?.[id] || '#fff'

  setBankrupt = () =>{
    this._bankrupt = true
  }
}
