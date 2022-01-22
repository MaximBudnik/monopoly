import {Card} from "./Card";
import {Player} from "../Player";
import {CardImages} from "../../constants/CardImages";
import {CardNames} from "../../constants/CardNames";

export class Start extends Card{
  name = CardNames.start
  imgUrl = CardImages[CardNames.start]
  onPlayerStop = (player: Player) =>{
    player.money+=300
  }
  onPlayerPass = (player: Player) =>{
    player.money+=200
  }
}
