import {FC} from "react";
import {useField} from "../hooks/useField";
import {FieldCard, Orientation} from "./FieldCard";
import styled from "styled-components";
import {geekblue, lime, magenta, red} from "@ant-design/colors";

type Props = {}

const Grid = styled.div`
  display: grid;
  grid-template-areas: 
    "a1 a1 a2 a3 a4 a5 a6 a7 a8 a9 a10 a11 a11"
    "a1 a1 a2 a3 a4 a5 a6 a7 a8 a9 a10 a11 a11"
    "a40 a40 a0 a0 a0 a0 a0 a0 a0 a0 a0 a12 a12"
    "a39 a39 a0 a0 a0 a0 a0 a0 a0 a0 a0 a13 a13"
    "a38 a38 a0 a0 a0 a0 a0 a0 a0 a0 a0 a14 a14"
    "a37 a37 a0 a0 a0 a0 a0 a0 a0 a0 a0 a15 a15"
    "a36 a36 a0 a0 a0 a0 a0 a0 a0 a0 a0 a16 a16"
    "a35 a35 a0 a0 a0 a0 a0 a0 a0 a0 a0 a17 a17"
    "a34 a34 a0 a0 a0 a0 a0 a0 a0 a0 a0 a18 a18"
    "a33 a33 a0 a0 a0 a0 a0 a0 a0 a0 a0 a19 a19"
    "a32 a32 a0 a0 a0 a0 a0 a0 a0 a0 a0 a20 a20"
    "a31 a31 a30 a29 a28 a27 a26 a25 a24 a23 a22 a21 a21"
    "a31 a31 a30 a29 a28 a27 a26 a25 a24 a23 a22 a21 a21";
  //grid-template-rows: repeat(auto-fill, 1fr);
  //grid-template-columns: repeat(auto-fill, 1fr);
  grid-gap: 4px;
  height: 100%;
  width: 100%;
  margin: 0;
`

export const Field: FC<Props> = (props) => {
    const {field} = useField()
    console.log(field)
    return (
        <Grid>
            {field?.map((card, i) => {
                let orientation: Orientation
                let idx = i + 1
                if (card.id >= 2 && card.id  <= 10) orientation = 'bottom'
                else if (card.id  >= 12 && card.id  <= 20) orientation = 'left'
                else if (card.id  >= 22 && card.id  <= 30) orientation = 'top'
                else if (card.id  >= 32 && card.id  <= 40) orientation = 'right'
                else orientation = 'none'

                return <div key={card.id} style={{gridArea: 'a' + (card.id).toString()}}>
                    <FieldCard price={card.price} orientation={orientation}
                               players={card.players}
                               id={card.id}
                               name={card.name}
                               imgUrl={card.imgUrl}
                               playerColor={card.playerColor}
                               groupColor={card.groupColor}
                    />
                </div>
            })}
        </Grid>
    )
}
