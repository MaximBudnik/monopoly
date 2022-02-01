import {FC} from "react";
import styled from "styled-components";
import {Card, Divider, Progress, Statistic} from "antd";
import {green, red} from "@ant-design/colors";
import {config} from "../../constants/config";

type Props = {}

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  & > * {
    margin-right: 4rem;
  }
`

export const General: FC<Props> = (props) => {
    return (
        <TabContainer>
            <Row>
                <Statistic valueStyle={{color: green[7]}} title="Balance" value={1024} suffix={config.moneySuffix}
                />
                <Statistic valueStyle={{color: red[7]}} title="Taxes to pay" value={340} suffix={config.moneySuffix}
                />
                <Statistic valueStyle={{color: green[7]}} title="Money per circle" value={226}
                           suffix={config.moneySuffix}
                />
                <Statistic valueStyle={{color: green[7]}} title="Money per turn" value={12} suffix={config.moneySuffix}
                />
            </Row>

        </TabContainer>
    )
}
