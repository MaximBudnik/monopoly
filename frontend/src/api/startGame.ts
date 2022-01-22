import {getSocket} from "./core";

export const subscribeToStartGame = (cb: (date: string) => void) => {
    getSocket().on('startGame', date => {
        return cb(date);
    });
}

export const unsubscribeToStartGame = () => {
    getSocket().off('startGame')
}

export const startGame = () => {
    getSocket().emit('startGame');
}
