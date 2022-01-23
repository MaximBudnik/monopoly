import {Player} from "../Player";
import {CardPresentation} from "../../types";
import {CardNames} from "../../constants/CardNames";

export class Card {
  get players(): Array<Player> {
    return this._players;
  }

  readonly id: number
  name: CardNames
  imgUrl?: string //FIXME should be transfered to config, but I'm too lazy

  onPlayerStop = (player: Player) => {
    this.addPlayer(player)
  }

  constructor(id: number) {
    this.id = id
  }

  onPlayerPass = (player: Player) => {

  }


  private _players: Array<Player> = []

  removePlayer = (player: Player) => {
    this._players = this._players.filter(e => e.id !== player.id)
  }

  addPlayer = (player: Player) => {
    this._players.push(player)
  }

  get presentation(): CardPresentation {
    return {
      id: this.id,
      name: this.name,
      imgUrl: this.imgUrl,
      players: this._players.filter(p => !p.bankrupt).map(e => e.cardPresentation),

    }
  }
}
