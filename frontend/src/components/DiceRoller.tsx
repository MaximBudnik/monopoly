import {FC, useEffect, useRef, useState} from "react";
import {usePlayers} from "../hooks/usePlayers";
import {Button} from "antd";
import styled from "styled-components";
import {useRollDices} from "../hooks/useRollDices";
import Dice from "react-dice-roll";

type Props = {}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const DiceRoller: FC<Props> = (props) => {
    const {meIsCurrent} = usePlayers()
    const {rollDices, dices} = useRollDices()
    const [rolled, setRolled] = useState(false)
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    console.log(dices)

    useEffect(() => {
        // @ts-ignore
        ref1?.current?.rollDice(dices?.[0])
        // @ts-ignore
        ref2?.current?.rollDice(dices?.[1])
    }, [dices])

    useEffect(()=>{
        setRolled(false)
    },[meIsCurrent])

    const onRoll = () => {
        rollDices()
        setRolled(true)
    }

    return (
        <Container>
            <div style={{marginBottom: '4rem'}}>
                {meIsCurrent && !rolled && <Button size={'large'} type={'primary'} onClick={onRoll}>Roll dices</Button>}
            </div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Dice disabled ref={ref1} size={100}/>
                <div style={{width: '2rem'}}/>
                <Dice disabled ref={ref2} size={100}/>
            </div>


        </Container>
    )
}
