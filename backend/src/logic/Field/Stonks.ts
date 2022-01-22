import {Card} from "./Card";
import {CardNames} from "../../constants/CardNames";
import {CardImages} from "../../constants/CardImages";

export class Stonks extends Card{
  name = CardNames.stonks
  imgUrl = CardImages[CardNames.stonks]
}

export class NotStonks extends Card{
  name = CardNames.notStonks
  imgUrl = CardImages[CardNames.notStonks]
}
