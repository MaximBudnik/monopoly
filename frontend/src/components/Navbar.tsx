import {FC} from "react";
import {Header} from "antd/es/layout/layout";
import {useStartGame} from "../hooks/useStartGame";
import {Button, Typography} from "antd";
import Countdown from "antd/es/statistic/Countdown";
import {config} from "../constants/config";
import {blue, grey} from '@ant-design/colors';

type Props = {}



export const Navbar: FC<Props> = (props) => {
    const {startGame, gameStartDate, gameStarted} = useStartGame()
    const deadline = +gameStartDate! + config.gameDuration * 60 * 1000
    return (
        <div style={{background: 'white', borderBottom: `1px solid #001528`}}>

                {gameStarted ? <Countdown title="Game ends in" value={deadline} onFinish={() => {
                    }}/>
                    : <Button type="primary" onClick={startGame}>Start game</Button>
                }
        </div>
    )
}
