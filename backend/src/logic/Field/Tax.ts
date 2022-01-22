import {UserWithSocket} from "../../types";
import {Card} from "./Card";
import {CardNames} from "../../constants/CardNames";
import {CardImages} from "../../constants/CardImages";

export class Tax extends Card{
  name = CardNames.tax
  imgUrl = CardImages[CardNames.tax]
}
