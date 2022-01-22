import {CSSProperties, FC} from "react";
import {Avatar, Card, Typography} from "antd";
import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';
import {AvatarIcon} from "./AvatarIcon";
import { CardPresentation } from "../../../backend/src/types";

export type Orientation = 'top' | 'bottom' | 'right' | 'left' | 'none'
export type PriceStatus = 'green' | 'red' | 'neutral'

type Props = CardPresentation & {
    orientation: Orientation
    onClick?: Function
//TODO: add Houses
}

export const FieldCard: FC<Props> = (props) => {

    let borderStyle: CSSProperties = {}

    switch (props.orientation) {
        case "top":
            borderStyle = {top: 0, width: '100%',}
            break;
        case "bottom":
            borderStyle = {bottom: 0, width: '100%'}
            break;
        case "right":
            borderStyle = {right: 0, height: '100%', writingMode: 'vertical-lr'}
            break;
        case "left":
            borderStyle = {left: 0, writingMode: 'vertical-lr', height: '100%'}
            break;
        case "none":
            break;

    }


    return (
        <div style={{
            backgroundImage: `url("${props.imgUrl}")`,
            width: '100%',
            height: '100%',
            position: 'relative',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: props.playerColor || 'white'
        }} onClick={() => props.onClick && props.onClick()}>
            <div style={{
                backgroundColor: props.groupColor,
                position: 'absolute',
                textAlign: 'center',
                ...borderStyle
            }}>
                {props.price}
            </div>
            <Avatar.Group>
                {props.players.map(e => <Avatar size={'large'} style={{background: e.color, borderColor: e.color}}
                                                src={<AvatarIcon value={e.username} size={32}/>}/>)}
            </Avatar.Group>
        </div>
    )
}
