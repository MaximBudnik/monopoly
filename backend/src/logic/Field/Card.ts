import {Player} from "../Player";
import {CardPresentation} from "../../types";

export class Card {
  readonly id: string
  name: string
  imgUrl?: string //FIXME should be transfered to config, but I'm too lazy

  onPlayerStop = (player: Player) => {

  }

  constructor(id:string|number) {
    this.id = id.toString()
  }

  onPlayerPass: null | ((player:Player) =>void)

  players:Array<Player> =[]

  get presentation(): CardPresentation {
    return {
      id: this.id,
      name: this.name,
      imgUrl: this.imgUrl,
      players: this.players.map(e=>e.cardPresentation),

    }
  }
}
