import {CardPresentation, Field, PlayerPresentation} from "../../../backend/src/types";
import {getSocket} from "./core";

export const subscribeToPlayers = (cb: PlayersSubscriber) => {
    getSocket().on('players', (players, turnStartTime) => {
        return cb(players, turnStartTime);
    });
}

export type PlayersSubscriber = (players: Array<PlayerPresentation>, turnStartTime:string) => void

export const unsubscribeToPlayers= (f:PlayersSubscriber) => {
    getSocket().off('players',f)
}