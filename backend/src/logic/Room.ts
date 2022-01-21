import { User, UserWithSocket} from "../types";

export class Room {
  get isGameStarted(): boolean {
    return this._isGameStarted;
  }

  get users(): Array<UserWithSocket> {
    return this._users;
  }

  private _users: Array<UserWithSocket> = []
  private _isGameStarted: boolean = false
  name: string

  constructor(name: string) {
    this.name = name
  }

  joinUser = (user: UserWithSocket) => {
    this._users.push(user)
  }

  removeUser = (user: User) => {
    this._users = this._users.filter(e => e.id !== user.id)
  }

  startGame = () => {
    this._isGameStarted = true
  }

  isEmpty = () => this._users.length === 0
}
