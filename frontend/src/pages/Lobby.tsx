import {FC} from "react";
import styled from "styled-components";
import {Button, Form, Input, Typography} from "antd";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const Lobby: FC = () => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Container>
                <Form
                    style={{width: 350}}
                    name="lobby"
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Typography.Title style={{textAlign: 'center'}}>
                        Coding Monopoly
                    </Typography.Title>
                    <Form.Item
                        label="Room name"
                        name="room"
                        rules={[{ required: true, message: 'Please input room name!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item >
                        <Button style={{width:'100%'}} type="primary" htmlType="submit" >
                            Join
                        </Button>
                    </Form.Item>
                </Form>
        </Container>
    )
}
