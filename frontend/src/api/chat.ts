import { Message } from "../../../backend/src/types";
import {getRoomId, getSocket} from "./core";

export const subscribeToChat = (cb: (message: Message) => void) => {
    getSocket().on('chat', message => {
        return cb(message);
    });
}

export const unsubscribeToChat = ()=>{
    getSocket().off('chat')
}

export const sendMessage = (message: string) => {
    getSocket().emit('chat', message);
}
