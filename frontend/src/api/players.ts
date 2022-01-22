import {CardPresentation, Field, PlayerPresentation} from "../../../backend/src/types";
import {getSocket} from "./core";

export const subscribeToPlayers = (cb: (players: Array<PlayerPresentation>, turnStartTime:string) => void) => {
    getSocket().on('players', (players, turnStartTime) => {
        return cb(players, turnStartTime);
    });
}

export const unsubscribeToPlayers= () => {
    getSocket().off('players')
}