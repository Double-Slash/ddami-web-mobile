import React,{useState} from 'react';
import styled from 'styled-components';
import {  Link, Switch, Redirect } from "react-router-dom";
import 'antd/dist/antd.css';
import { Drawer, Button, Radio, Space, Tooltip } from 'antd';
import Search from './Search'
import menu from '../img/menu.svg';
import search from '../img/search.svg';
import DrawerProfile from './DrawerProfile';

//  anti-design framework를 이용하여 제작했습니다. (일일이 기능 만드는게 어려워요ㅠㅠ)
// 왼쪽에서 나오는 드로워 부분입니다.^^

const Header = styled.header`
    display: flex;
    justify-content:space-between;
    background: #00b4d8;
    width: 100%;
    height: 56px;
`;

const ImgMenu = styled.img`
    /* background: tomato; */
    padding-left: 16px;
    padding-top: 21px;
    padding-bottom: 21px;
    height: 56px;
    width: 32px ;
`;

const Title = styled.div`
    display: inline-block;
    /* background: green; */
    width: 200px;
    height: 56px;
    text-align: center;
    padding-top: 19px;    
    padding-bottom: 19px;
    h1 {
        font-size: 18px;
        font-weight: bold;
    }
`;

const SearchBar = styled.div`
    display: inline-block;
    width: 50px;
    height: 56px;
    /* background: greenyellow; */
`;

const ImgSearch = styled.img`
    padding-top: 19px;
    padding-bottom: 18px;
    padding-right:16px;
    height: 56px;
    width: 35px;
`;

const LinkSection = styled.div`
    margin-top: 48px;
    padding-top: 38px;
    padding-left: 52px;
    background: #E6E6FA;
    width: 230px;
    height:492px;
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
                            좋아요한 작품
                        </LinkToText>
                    </LinkToSection>
                    <LinktoTitleMargin />
                    <LinkTitle>따미샵</LinkTitle>
                    <LinkToSection>
                        <LinkToText>
                            판구매 조회
                        </LinkToText>
                        <LinkToMargintop />
                        <LinkToText>
                            찜한 목록
                        </LinkToText>
                    </LinkToSection>
                    <LinktoTitleMargin />
                    <LinkTitle>대외활동</LinkTitle>
                    <LinkToSection>
                        <LinkToText>
                            관심있는 활동
                        </LinkToText>
                    </LinkToSection>
                    <LinkTitle>설정</LinkTitle>
                </LinkSection>
            </Drawer>
            </Space>
            <Title>
                <h1>따미마을</h1>
            </Title>
            <SearchBar>
                <Link to="/search"><ImgSearch src={search} alt="검색"></ImgSearch></Link>
            </SearchBar>
        </Header>   


        </>
    );
};

export default DrawerLeft;