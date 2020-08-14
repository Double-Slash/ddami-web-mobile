import React from 'react';
import DrawerLeft from "../common/DrawerLeft";
import styled from "styled-components";
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import Like from "./Like";

const Body = styled.div`
  width: 100%;
  height: 100%;
  background: #F0F0F6;
`;

const LikeTitle = styled.div`
  padding-top: 16px;
  padding-bottom: 15px;
  font-size: 18px;
  text-align: center;
  width: 100%; 
  height: 51px;
  background: #F0F0F6;
`;

const LikeSection = styled.div`
  background: coral;
  width: 100%;
  height: 100%;
  border-top-left-radius: 20px;
  padding-top: 20px;
  padding-left: 16px;
`;

const TagSection = styled.div`
  height: 28px;
  width: 100%;
  background: yellow;
`;

const { TabPane } = Tabs;

const Purchase = () => {
    return (
        <>
            <DrawerLeft />
            <Body>
                <LikeTitle>판구매 조회</LikeTitle>
                <LikeSection>
                    <Tabs>
                        <TabPane tab="판매 내역" key="1">
                            <TagSection>
                                태그 관련 영역🙄
                            </TagSection>
                            Content of Tab Pane 1
                        </TabPane>
                        <TabPane tab="구매 내역" key="2">
                            <TagSection>
                                태그 관련 영역🙄
                            </TagSection>
                            Content of Tab Pane 2
                        </TabPane>
                    </Tabs>
                </LikeSection>
            </Body>
        </>
    );
};

export default Purchase;
