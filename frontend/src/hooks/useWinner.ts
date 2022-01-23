import {useEffect, useState} from "react";
import {startGame, subscribeToStartGame, unsubscribeToStartGame} from "../api/startGame";
import {subscribeToWinner, unsubscribeToWinner} from "../api/winner";

export const useWinner = () => {
    const [winner, setWinner] = useState<string>()

    useEffect(() => {
        subscribeToWinner((date) => {
            setWinner(date)
        })
        return unsubscribeToWinner
    }, [])

    return {winner}
}