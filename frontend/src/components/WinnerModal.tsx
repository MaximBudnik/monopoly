import {FC} from "react";
import {useWinner} from "../hooks/useWinner";
import {Avatar, Modal, Typography} from "antd";
import {useNavigate} from "react-router-dom";
import {routes} from "../constants/routes";
import {red} from "@ant-design/colors";
import {AvatarIcon} from "./AvatarIcon";

type Props = {}

export const WinnerModal: FC<Props> = (props) => {
    const {winner} = useWinner()
    const navigate = useNavigate();
    const onModalClose = () => {
        navigate(routes.lobby)
    }
    return (
        <Modal title="Winner" visible={Boolean(winner)} onOk={onModalClose}>
            <div style={{display: "flex", alignItems: 'center', justifyContent: 'center'}}>
                <Avatar size={'large'}
                        style={{width: 64, height: 64}}
                        src={<AvatarIcon value={winner || ''} size={64}/>}/>
            </div>
            <Typography.Title level={3}>{winner}</Typography.Title>
        </Modal>
    )
}
