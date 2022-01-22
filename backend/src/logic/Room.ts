import {Field, User, UserWithSocket} from "../types";
import {shuffle} from "lodash";
import {Player} from "./Player";
import {Start} from "./Field/Start";
import {sendFieldToRoom} from "../handlers/field";
import {Card} from "./Field/Card";

export class Room {

  private _players: Array<Player> = []
  private _gameStartDate: Date | null = null
  readonly name: string
  private _cycles = 0
  private readonly sendFieldToRoom: (field: Field) => void
  private _field: Array<Card> = [
    new Start(0)
  ]

  constructor(name: string, sendFieldToRoom: (field: Field) => void) {
    this.name = name
    this.sendFieldToRoom = sendFieldToRoom
  }

  private updateField = () => {
    this.sendFieldToRoom(this._field.map(e => e.presentation))
  }

  private update = () => {
    this.updateField()
  }

  //TODO check if game is started to prevent new player join
  get isGameStarted(): boolean {
    return Boolean(this.gameStartDate);
  }

  get gameStartDate(): Date {
    return this._gameStartDate
  }

  get players(): Array<Player> {
    return this._players;
  }

  joinUser = (user: UserWithSocket) => {
    this._players.push(new Player(user))
  }

  removeUser = (user: User) => {
    this._players = this._players.filter(e => e.id !== user.id)
  }

  startGame = () => {
    this._gameStartDate = new Date()
    this._players = shuffle(this._players)
    this._field[0].players = [...this._players]
    this.update()
  }

  isEmpty = () => this._players.length === 0
}
