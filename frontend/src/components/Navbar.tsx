import {FC} from "react";
import {Header} from "antd/es/layout/layout";
import {useStartGame} from "../hooks/useStartGame";
import {Avatar, Badge, Button, Divider, PageHeader, Typography} from "antd";
import Countdown from "antd/es/statistic/Countdown";
import {config} from "../constants/config";
import {blue, grey, red} from '@ant-design/colors';
import {usePlayers} from "../hooks/usePlayers";
import {useLocation, useParams} from "react-router-dom";
import {AvatarIcon} from "./AvatarIcon";

type Props = {}


export const Navbar: FC<Props> = (props) => {
    const {startGame, gameStartDate, gameStarted} = useStartGame()
    const {players, turnStartDate} = usePlayers()
    const params = useParams<{ id: string }>()
    const gameDeadline = +gameStartDate! + config.gameDuration * 60 * 1000
    const turnDeadline = +turnStartDate! + config.secondsPerMove * 1000
    return (
        <PageHeader style={{background: 'white'}} title={<div>
            <Avatar.Group>
                {players?.map(e => {
                    return <Avatar key={e.id} shape={e.current ? 'square' : 'circle'} size={'large'}
                                   style={{background: e.color, borderColor: e.color, border: e.bankrupt ? `4px dashed ${red[8]}` : `1px solid ${e.color}`}}
                                   src={<AvatarIcon value={e.username} size={32}/>}/>;
                })}
            </Avatar.Group>
        </div>} extra={[
            <div style={{display: 'flex', alignItems:'center', justifyContent: 'space-between'}}>
                    {gameStartDate && <Countdown title="Time on turn" value={turnDeadline}/>}
                {gameStartDate && <Divider type="vertical"/>}

                    {
                        gameStarted ? <Countdown title="Game ends in" value={gameDeadline}/>
                            : <Button type="primary" onClick={startGame}>Start game</Button>
                    }
            </div>
        ]}>


        </PageHeader>
    )
}
