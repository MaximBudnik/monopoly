import {UserWithSocket} from "../../types";
import {Card} from "./Card";

export class Jail extends Card{
  owner: UserWithSocket | null
}
