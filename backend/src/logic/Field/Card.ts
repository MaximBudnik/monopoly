import {Player} from "../Player";
import {CardPresentation} from "../../types";
import {CardNames} from "../../constants/CardNames";

export class Card {
  readonly id: number
  name: CardNames
  imgUrl?: string //FIXME should be transfered to config, but I'm too lazy

  onPlayerStop = (player: Player) => {

  }

  constructor(id:number) {
    this.id = id
  }

  onPlayerPass: null | ((player:Player) =>void)

  players:Array<Player> =[]

  get presentation(): CardPresentation {
    return {
      id: this.id,
      name: this.name,
      imgUrl: this.imgUrl,
      players: this.players.filter(p=>!p.bankrupt).map(e=>e.cardPresentation),

    }
  }
}
