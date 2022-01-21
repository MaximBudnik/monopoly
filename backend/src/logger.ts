import {TypedServer} from "./types";
import {curry} from "lodash";

export const logToRoom = curry<TypedServer, string, string, void>((io: TypedServer, room: string, text: string) => {
  io.to(room).emit('chat', {text: text, sender: 'Info', system: true, time: new Date().toLocaleTimeString()});
})
