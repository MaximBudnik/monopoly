import {UserWithSocket} from "../../types";
import {Card} from "./Card";

export class Property extends Card{
  owner: UserWithSocket | null
  price: number
  size: number = 3
  housePriceMultiplier = 2


  constructor(id:number, name: string, imgUrl: string ) {
    super(id);
    this.name = name
    this.imgUrl = imgUrl
  }
}
