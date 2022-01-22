import {UserWithSocket} from "../../types";
import {Card} from "./Card";
import {CardNames} from "../../constants/CardNames";
import {CardImages} from "../../constants/CardImages";

export class Jail extends Card{
  name = CardNames.jail
  imgUrl = CardImages[CardNames.jail]
}
