import {CardPresentation, Field, Handler, PlayerPresentation, TypedServer} from "../types";
import {curry} from "lodash";

export const sendFieldToRoom = curry((io: TypedServer, room: string, field: Field) => {
  io.to(room).emit('field', field);
})

export const sendPlayersToRoom = curry((io: TypedServer, room: string, players: Array<PlayerPresentation>, turnStartTime: string) => {
  io.to(room).emit('players', players, turnStartTime);
})
