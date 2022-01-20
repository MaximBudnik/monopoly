import {FC, useEffect, useState} from "react";
import {connectSocket, getSocket} from "../api/core";
import {useParams} from "react-router-dom";
import {Chat} from "../components/Chat";

type Props = {}

export const Room: FC<Props> = (props) => {

    const params = useParams<{id:string}>()
    const [isSocketInitialized, setIsSocketInitialized] = useState(false)
    useEffect(() => {
        connectSocket(params.id!)
        setIsSocketInitialized(true)
    }, [])

    if(!isSocketInitialized) return null

    return (
        <div>
            <Chat/>
        </div>
    )
}
