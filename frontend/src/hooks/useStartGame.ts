import {useEffect, useState} from "react";
import {startGame, subscribeToStartGame, unsubscribeToStartGame} from "../api/startGame";

export const useStartGame = () => {
    const [gameStartDate, setGameStartDate] = useState<Date>()

    useEffect(() => {
        subscribeToStartGame((date) => {
            setGameStartDate(new Date(date))
        })
        return unsubscribeToStartGame
    }, [])

    return {gameStartDate, startGame, gameStarted: Boolean(gameStartDate)}
}