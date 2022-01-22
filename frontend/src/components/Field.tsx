import {FC} from "react";
import {useField} from "../hooks/useField";
import {FieldCard, Orientation} from "./FieldCard";
import styled from "styled-components";
import {geekblue, lime, magenta, red} from "@ant-design/colors";

type Props = {}

const Grid = styled.div`
  display: grid;
  grid-template-areas: 
    "a1 a1 a2 a3 a4 a5 a6 a7 a8 a9 a10 a10"
    "a1 a1 a2 a3 a4 a5 a6 a7 a8 a9 a10 a10"
    "a40 a40 a0 a0 a0 a0 a0 a0 a0 a0 a11 a11"
    "a39 a39 a0 a0 a0 a0 a0 a0 a0 a0 a12 a12"
    "a38 a38 a0 a0 a0 a0 a0 a0 a0 a0 a13 a13"
    "a37 a37 a0 a0 a0 a0 a0 a0 a0 a0 a14 a14"
    "a36 a36 a0 a0 a0 a0 a0 a0 a0 a0 a15 a15"
    "a35 a35 a0 a0 a0 a0 a0 a0 a0 a0 a16 a16"
    "a34 a34 a0 a0 a0 a0 a0 a0 a0 a0 a17 a17"
    "a33 a33 a0 a0 a0 a0 a0 a0 a0 a0 a18 a18"
    "a32 a32 a0 a0 a0 a0 a0 a0 a0 a0 a19 a19"
    "a31 a31 a0 a0 a0 a0 a0 a0 a0 a0 a20 a20"
    "a30 a30 a29 a28 a27 a26 a25 a24 a23 a22 a21 a21"
    "a30 a30 a29 a28 a27 a26 a25 a24 a23 a22 a21 a21";

  //grid-template-rows: repeat(auto-fill, 1fr);
  //grid-template-columns: repeat(auto-fill, 1fr);
  grid-gap: 3px;
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
                if (i >= 1 && i <= 8) orientation = 'bottom'
                else if (i >= 10 && i <= 19) orientation = 'left'
                else if (i >= 30 && i <= 39) orientation = 'right'
                else if (i >= 21 && i <= 28) orientation = 'top'
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
