import {CardPresentation, UserWithSocket} from "../../types";
import {Card} from "./Card";
import {PropertyGroups} from "../../constants/PropertyGroups";
import {CardNames} from "../../constants/CardNames";
import {PropertyGroupColor} from "../../constants/colors";

export class Property extends Card {
  owner: UserWithSocket | null
  price: number
  size: number = 3
  housePriceMultiplier = 2
  group: PropertyGroups

  constructor(id: number, name: CardNames, imgUrl: string, group: PropertyGroups) {
    super(id);
    this.name = name
    this.imgUrl = imgUrl
    this.group = group
  }

  get presentation(): CardPresentation {
    return {
      id: this.id,
      name: this.name,
      imgUrl: this.imgUrl,
      players: this.players.map(e => e.cardPresentation),
      groupColor: PropertyGroupColor[this.group],
      price: this.id*10
    }
  }
}
