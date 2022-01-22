import {CardPresentation, Field, Handler, TypedServer} from "../types";
import {curry} from "lodash";

export const sendFieldToRoom = curry((io:TypedServer, room:string, field: Field) => {
  io.to(room).emit('field', field);
})
