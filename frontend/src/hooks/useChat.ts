import {useEffect, useState} from "react";
import {Message} from "../../../backend/src/types";
import {sendMessage, subscribeToChat, unsubscribeToChat} from "../api/chat";
import {config} from "../constants/config";

export const useChat = () => {
    const [messages, setMessages] = useState<Array<Message>>([])


    useEffect(() => {
        subscribeToChat((message: Message) => {
            if (messages.length > config.maxChatMessages) messages.shift()
            setMessages(arr=>[...arr, message])
        })
        return unsubscribeToChat
    },[])

    return {messages, sendMessage}
}