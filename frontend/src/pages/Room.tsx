import {FC, useEffect, useState} from "react";
import {connectSocket, getSocket} from "../api/core";
import {useParams} from "react-router-dom";
import {Chat} from "../components/Chat";
import {Navbar} from "../components/Navbar";
import {Field} from "../components/Field";
import styled from "styled-components";

type Props = {}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  padding: 4px;
`

export const Room: FC<Props> = (props) => {

    const params = useParams<{ id: string }>()
    const [isSocketInitialized, setIsSocketInitialized] = useState(false)
    useEffect(() => {
        connectSocket(params.id!)
        setIsSocketInitialized(true)
    }, [])

    if (!isSocketInitialized) return null

    return (
        <Container>
            <div style={{width: '100vh'}}>
                <Field/>

            </div>
            <div style={{marginLeft: '1rem'}}>
                <Navbar/>
                <Chat/>
            </div>

        </Container>
    )
}
