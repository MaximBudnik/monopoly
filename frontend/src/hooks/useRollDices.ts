import {useEffect, useState} from "react";
import {rollDices, subscribeToRollDices, unsubscribeToRollDices} from "../api/rollDices";

export const useRollDices = () => {
    const [dices, setDices] = useState<[number,number]>()

    useEffect(() => {
        subscribeToRollDices((date) => {
            setDices(date)
        })
        return unsubscribeToRollDices
    }, [])

    return {dices, rollDices}
}