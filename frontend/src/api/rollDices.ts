import {getSocket} from "./core";

export const subscribeToRollDices = (cb: (dices: [number,number]) => void) => {
    getSocket().on('rollDices', date => {
        return cb(date);
    });
}

export const unsubscribeToRollDices = () => {
    getSocket().off('rollDices')
}

export const rollDices = () => {
    getSocket().emit('rollDices');
}
