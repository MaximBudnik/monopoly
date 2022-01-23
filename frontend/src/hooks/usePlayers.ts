import {useEffect, useState} from "react";
import {subscribeToField, unsubscribeToField} from "../api/field";
import {CardPresentation, Field, PlayerPresentation} from "../../../backend/src/types";
import {subscribeToPlayers, unsubscribeToPlayers} from "../api/players";

export const usePlayers = () => {
    const [players, setPlayers] = useState<Array<PlayerPresentation>>([])
    const [turnStartDate, setTurnStartDate] = useState<Date>()

    useEffect(() => {
        subscribeToPlayers(subscriber)

        function subscriber(players: Array<PlayerPresentation>, turnStartTime: string) {
            setPlayers(players)
            setTurnStartDate(new Date(turnStartTime))
        }

        return () => unsubscribeToPlayers(subscriber)
    }, [])
    return {players, turnStartDate, meIsCurrent: players.find(e => e.current)?.id === sessionStorage.getItem('id')}
}