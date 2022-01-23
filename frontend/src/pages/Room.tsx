import {FC, useEffect, useState} from "react";
import {connectSocket, getSocket} from "../api/core";
import {useParams} from "react-router-dom";
import {Chat} from "../components/Chat";
import {Navbar} from "../components/Navbar";
import {Field} from "../components/Field";
import styled from "styled-components";
import {Tabs} from "antd";
import {WinnerModal} from "../components/WinnerModal";

type Props = {}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  padding: 4px;
`

const LeftContainer = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
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
            <LeftContainer>
                <Navbar/>
                <Tabs style={{flex:1}} defaultActiveKey="1">
                    <Tabs.TabPane tab="Players" key="1">
                        Content of Tab Pane 1
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Property overview" key="2">
                        Content of Tab Pane 2
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Abilities" key="3">
                        Content of Tab Pane 3
                    </Tabs.TabPane>
                </Tabs>
                <Chat/>
            </LeftContainer>
            <WinnerModal/>
        </Container>
    )
}
