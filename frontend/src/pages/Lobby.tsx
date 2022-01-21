import {FC} from "react";
import styled from "styled-components";
import {Button, Form, Input, Typography} from "antd";
import {getToken} from "../api/auth";
import jwt from 'jwt-decode'
import {useNavigate} from "react-router-dom";
import {routes} from "../constants/routes";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const Lobby: FC = () => {

    const navigate = useNavigate();

    const onFinish = async (values: { username: string, room: string }) => {
        const token = await (await getToken(values.username, values.room)).json()
        sessionStorage.setItem('token', token)
        const user: { username: string, id: string } = jwt(token)
        sessionStorage.setItem('username', user.username)
        sessionStorage.setItem('id', user.id)
        navigate(routes.getRoomUrl(values.room))
    };

    return (
        <Container>
            <Form
                style={{width: 350}}
                name="lobby"
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
            >
                <Typography.Title style={{textAlign: 'center'}}>
                    Coding Monopoly
                </Typography.Title>
                <Form.Item
                    label="Room name"
                    name="room"
                    rules={[{required: true, message: 'Please input room name!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{required: true, message: 'Please input your username!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item>
                    <Button style={{width: '100%'}} type="primary" htmlType="submit">
                        Join
                    </Button>
                </Form.Item>
            </Form>
        </Container>
    )
}
