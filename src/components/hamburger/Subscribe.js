import React from 'react';
import DrawerLeft from "../common/DrawerLeft";
import styled from "styled-components";
import 'antd/dist/antd.css';
import {Menu, Dropdown, Button} from 'antd';

import { EllipsisOutlined } from '@ant-design/icons';

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
  padding-top: 18px;
  padding-left: 18px;
  padding-right: 18px;
`;

const SubscribeSection = styled.div`
  display: flex;
  width: 100%;
  height: 114px;
  background: yellow;
`;

const SubImg = styled.img`
  width: 114px;
  height: 114px;
  background: dodgerblue;
`;

const SubSection = styled.div`
  margin-left: 14px;
  background: blueviolet;
  width: 100%;
  height: 100%;
`;

const SubTitle = styled.div`
  height: 20px;
  width: 100%;
  background: bisque;
`;
const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                1st menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                2nd menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                3rd menu item
            </a>
        </Menu.Item>
    </Menu>
);

const DropdownMenu = () => {
    return (
        <Dropdown key="more" overlay={menu}>
            <Button
                style={{
                    border: 'none',
                    padding: 0,
                }}
            >
                <EllipsisOutlined
                    style={{
                        fontSize: 20,
                        verticalAlign: 'top',
                    }}
                />
            </Button>
        </Dropdown>
    );
};

const Subscribe = () => {
    return (
        <>
            <DrawerLeft />
            <Body>
                <LikeTitle>찜한 목록</LikeTitle>
                <LikeSection>
                    <SubscribeSection>
                        <SubImg/>
                        <SubSection>
                            <SubTitle>
                                <DropdownMenu/>
                            </SubTitle>
                        </SubSection>
                    </SubscribeSection>
                </LikeSection>
            </Body>
        </>
    );
};

export default Subscribe;
