import React,{useState} from 'react';
import styled from 'styled-components';
import {  Link, Switch, Redirect } from "react-router-dom";
import 'antd/dist/antd.css';
import { Drawer, Button, Radio, Space, Tooltip, Badge } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import menu from '../../static/icons/menu.svg';
import searchIcon from '../../static/icons/btn-search-enter.svg'
import alarmIcon from '../../static/icons/btn-alarm.svg'

import DrawerProfile from './DrawerProfile';

//  anti-design framework를 이용하여 제작했습니다. (일일이 기능 만드는게 어려워요ㅠㅠ)
// 왼쪽에서 나오는 드로워 부분입니다.^^

const Header = styled.header`
    display: flex;
    //justify-content:space-between;
    background: #00b4d8;
    width: 100%;
    height: 60px;
`;

const ImgMenu = styled.img`
    //background: tomato;
    padding-left: 18px;
    padding-top: 22px;
    padding-bottom: 22px;
    height: 60px;
    width: 32px;
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    margin-left: 17.62px; //기본 ant.css marginleft: 8px 입니다.
    //background: green;
    width: 218.38px;
    height: 60px;
    h1 {
        margin-bottom: 0;
        //background: crimson;
        font-size: 18px;
        font-weight: bold;
    }
`;

const SearchBar = styled.div`
    display: inline-block;
    width: 42.89px;
    height: 60px;
    //background: greenyellow;
`;

const ImgSearch = styled.img`
    padding-top: 20px;
    padding-bottom: 20px;
    padding-right:16px;
    height: 60px;
    width: 35px;
`;

const Alarm = styled.div`
    margin-top: 18px;
    //background: coral;
    height: 40px;
    width:20px;
`;

const ImgAlarm = styled.img`

`;

const LinkSection = styled.div`
    margin-top: 48px;
    padding-top: 38px;
    padding-left: 52px;
    background: #E6E6FA;
    width: 230px;
    height:564px; //해당 드로워가 꽉 차게 조정하였습니다. Dev Hyunho
    border-top-right-radius: 40px;
`;

const LinkTitle = styled.div`
  font-size: 18px;
  color:#322FA0;
  font-weight: bold;
`;

const LinkToSection = styled.div`
  margin-top: 24px;
  height: 51px;
  width: 100%;
`;

const LinkToMargintop = styled.div`
  height: 17px;
`;

const LinkToText = styled.div`
  font-size: 15px;
  color:#232323;
`;

const LinktoTitleMargin = styled.div`
  height: 42px;
`;

const DrawerLeft = () => {

    // 상태를 알려주는 부분이야
    const [state, setState] = useState(false);
    const [placement, setPlacement] = useState('left');

    // 이거는 onClick() 함수를 이용해서 상태를 변화줄려고 한거야
    const showDrawer = () => setState(true);
    const onClose = () => setState(false);

    return (
        <>
        <Header >
            <Space>
            <ImgMenu src={menu} alt="메뉴바" onClick={showDrawer}/>
            <Drawer
                placement={placement}
                closable={false}
                onClose={onClose}
                visible={state}
                width={246}
                >
                <DrawerProfile />
                <LinkSection>
                    <LinkTitle>따미마을</LinkTitle>
                    <LinkToSection>
                        <LinkToText>
                            내 작업실
                        </LinkToText>
                        <LinkToMargintop />
                        <LinkToText>
                            <Link to="/like">좋아요한 작품</Link>
                        </LinkToText>
                    </LinkToSection>
                    <LinktoTitleMargin />
                    <LinkTitle>따미샵</LinkTitle>
                    <LinkToSection>
                        <LinkToText>
                            <Link to="/purchase">판구매 조회</Link>
                        </LinkToText>
                        <LinkToMargintop />
                        <LinkToText>
                            <Link to="/subscribe">찜한 목록</Link>
                        </LinkToText>
                    </LinkToSection>
                    <LinktoTitleMargin />
                    <LinkTitle>대외활동</LinkTitle>
                    <LinkToSection>
                        <LinkToText>
                            관심있는 활동
                        </LinkToText>
                    </LinkToSection>
                    <Link to='/setting'><LinkTitle>설정</LinkTitle></Link>
                </LinkSection>
            </Drawer>
            </Space>
            <Title>
                <h1>DDAMI</h1>
            </Title>
            <SearchBar>
                <Link to="/search"><ImgSearch src={searchIcon} alt="검색"></ImgSearch></Link>
            </SearchBar>
            <Alarm>
                <Badge count={5}>
                    <Link to="/"><ImgAlarm src={alarmIcon} alt="알림"></ImgAlarm></Link>
                </Badge>
            </Alarm>

        </Header>   


        </>
    );
};

export default DrawerLeft;