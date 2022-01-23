import {getSocket} from "./core";

export const subscribeToWinner= (cb: (date: string) => void) => {
    getSocket().on('winner', date => {
        return cb(date);
    });
}

export const unsubscribeToWinner = () => {
    getSocket().off('winner')
}

