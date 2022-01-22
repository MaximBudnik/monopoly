import {Card} from "./Card";
import {CardNames} from "../../constants/CardNames";
import {CardImages} from "../../constants/CardImages";

export class Casino extends Card{
  name = CardNames.oneToOne
  imgUrl = CardImages[CardNames.oneToOne]
}
