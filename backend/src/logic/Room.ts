import {Field, PlayerPresentation, User, UserWithSocket} from "../types";
import {shuffle} from "lodash";
import {Player} from "./Player";
import {Start} from "./Field/Start";
import {Card} from "./Field/Card";
import {Property} from "./Field/Property";
import {PropertyGroups} from "../constants/PropertyGroups";
import {CardNames} from "../constants/CardNames";
import {CardImages} from "../constants/CardImages";
import {NotStonks, Stonks} from "./Field/Stonks";
import {Tax} from "./Field/Tax";
import {Jail} from "./Field/Jail";
import {Casino} from "./Field/Casino";
import {GoToJail} from "./Field/GoToJail";
import {rollTwoDices} from "../utils/random";
import {sendPlayersToRoom} from "../handlers/functions";
import {config} from "../constants/config";

export class Room {

  private _players: Array<Player> = []
  private _gameStartDate: Date | null = null
  readonly name: string
  private _cycles = 0
  private _currentPlayer = 0
  private _turnStartTime: Date
  private _turnTimeout: NodeJS.Timeout
  private readonly sendFieldToRoom: (field: Field) => void
  private readonly sendPlayersToRoom: (players: Array<PlayerPresentation>, turnStartTime: string) => void
  private _field: Array<Card> = [
    new Start(1),
    new Property(2, CardNames.bash, CardImages[CardNames.bash], PropertyGroups.script),
    new NotStonks(3),
    new Property(4, CardNames.python, CardImages[CardNames.python], PropertyGroups.script),
    new Tax(5),
    new Property(6, CardNames.docker, CardImages[CardNames.docker], PropertyGroups.devops),
    new Property(7, CardNames.html, CardImages[CardNames.html], PropertyGroups.web),
    new Stonks(8),
    new Property(9, CardNames.css, CardImages[CardNames.css], PropertyGroups.web),
    new Property(10, CardNames.js, CardImages[CardNames.js], PropertyGroups.web),
    new Jail(11),
    new Property(12, CardNames.vim, CardImages[CardNames.vim], PropertyGroups.ide),
    new Property(13, CardNames.gcloud, CardImages[CardNames.gcloud], PropertyGroups.cloudProvider),
    new Property(14, CardNames.vscode, CardImages[CardNames.vscode], PropertyGroups.ide),
    new Property(15, CardNames.webstorm, CardImages[CardNames.webstorm], PropertyGroups.ide),
    new Property(16, CardNames.kubernetes, CardImages[CardNames.kubernetes], PropertyGroups.devops),
    new Property(17, CardNames.java, CardImages[CardNames.java], PropertyGroups.java),
    new NotStonks(18),
    new Property(19, CardNames.scala, CardImages[CardNames.scala], PropertyGroups.java),
    new Property(20, CardNames.kotlin, CardImages[CardNames.kotlin], PropertyGroups.java),
    new Casino(21),
    new Property(22, CardNames.redis, CardImages[CardNames.redis], PropertyGroups.database),
    new Stonks(23),
    new Property(24, CardNames.postgres, CardImages[CardNames.postgres], PropertyGroups.database),
    new Property(25, CardNames.mongodb, CardImages[CardNames.mongodb], PropertyGroups.database),
    new Property(26, CardNames.ansible, CardImages[CardNames.ansible], PropertyGroups.devops),
    new Property(27, CardNames.go, CardImages[CardNames.go], PropertyGroups.lowLevel),
    new Property(28, CardNames.rust, CardImages[CardNames.rust], PropertyGroups.lowLevel),
    new Property(29, CardNames.aws, CardImages[CardNames.aws], PropertyGroups.cloudProvider),
    new Property(30, CardNames.cpp, CardImages[CardNames.cpp], PropertyGroups.lowLevel),
    new GoToJail(31),
    new Property(32, CardNames.bitbucket, CardImages[CardNames.bitbucket], PropertyGroups.versionControl),
    new Property(33, CardNames.gitlab, CardImages[CardNames.gitlab], PropertyGroups.versionControl),
    new Stonks(34),
    new Property(35, CardNames.github, CardImages[CardNames.github], PropertyGroups.versionControl),
    new Property(36, CardNames.terrafrom, CardImages[CardNames.terrafrom], PropertyGroups.devops),
    new NotStonks(37),
    new Property(38, CardNames.clojure, CardImages[CardNames.clojure], PropertyGroups.functional),
    new Tax(39),
    new Property(40, CardNames.haskell, CardImages[CardNames.haskell], PropertyGroups.functional),
  ]

  constructor(name: string, sendFieldToRoom: (field: Field) => void, sendPlayersToRoom: (players: Array<PlayerPresentation>) => void) {
    this.name = name
    this.sendFieldToRoom = sendFieldToRoom
    this.sendPlayersToRoom = sendPlayersToRoom
  }

  private updateField = () => {
    this.sendFieldToRoom(this._field.map(e => e.presentation))
  }

  private updatePlayers = () => {
    this.sendPlayersToRoom(this._players.map((e, idx) =>
        e.getPlayerPresentation(idx === this._currentPlayer)),
      this._turnStartTime.toString())
  }

  private update = () => {
    this.updateField()
    this.updatePlayers()
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
    this._players.forEach((p, i) => p.setColor(i))
    this._turnStartTime = new Date()
    this._turnTimeout = setTimeout(() => {
      this._players[this._currentPlayer].setBankrupt()
      this.updatePlayers()
    }, config.secondsPerMove * 1000)
    this.update()
  }

  isEmpty = () => this._players.length === 0
}
