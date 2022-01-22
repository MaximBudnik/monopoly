import {FC, useEffect, useRef, useState} from "react";
import {List, Comment, Form, Input, Button, Typography} from "antd";
import {useChat} from "../hooks/useChat";
import {toSvg} from "jdenticon";
import {AvatarIcon} from "./AvatarIcon";

type Props = {}

export const Chat: FC<Props> = () => {
    const {messages, sendMessage} = useChat()
    const [text, setText] = useState('')

    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        ref!.current!.scrollIntoView({behavior: "smooth"})
    }, [messages])

    const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)

    const onSubmit = () => {
        if(!text) return
        sendMessage(text)
        setText('')
    }
    return (
        <div style={{width:'40rem'}}>
            <Typography.Title level={5}>
                Chat
            </Typography.Title>
            <div style={{maxHeight: '20rem', overflowY: 'scroll'}}>
                <List
                    dataSource={messages}
                    itemLayout="horizontal"
                    renderItem={props => <Comment avatar={props.system? null : <AvatarIcon value={props.sender} size={50}/>}
                                                  author={props.sender}
                                                  datetime={props.time} content={<p>{props.text}</p>}/>}
                />
                <div ref={ref}></div>
            </div>
            <div style={{display: 'flex'}}><Input placeholder={'Use @username to write private messages. You can tag multiple users'}
                      onChange={onTextChange} onPressEnter={onSubmit} value={text}/>
                <Button htmlType="submit" onClick={onSubmit} type="primary">
                    Send
                </Button></div>
        </div>
    )
}
