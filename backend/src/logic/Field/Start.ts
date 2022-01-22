import {UserWithSocket} from "../../types";
import {Card} from "./Card";
import {Player} from "../Player";

export class Start extends Card{
  name = 'Start'
  imgUrl = 'https://image.flaticon.com/icons/png/512/495/495468.png'
  onPlayerStop = (player: Player) =>{
    player.money+=300
  }
  onPlayerPass = (player: Player) =>{
    player.money+=200
  }
}
