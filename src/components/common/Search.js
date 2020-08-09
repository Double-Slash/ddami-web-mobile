import React from 'react';
import styled from 'styled-components';
import {Link, Switch, Redirect, Route } from "react-router-dom";
import Work from './SubMenu/Work';
import Artist from './SubMenu/Artist';
import Material from './SubMenu/Material';
import back from '../img/back.svg';
import SubMenus from './SubMenus';
import 'antd/dist/antd.css';
import { Input} from 'antd';

// 검색화면입니다.

const Header = styled.header`
    display: flex;
    background: #00b4d8;
    width: 100%;
    height: 60px;
`;

const BackClick = styled.div`
    display: inline-block;
    /* background: greenyellow; */
    width: 33px;
    height: 56px;
`;

const BackImg = styled.img`
    padding-top:19px;
    padding-bottom: 19px;
    padding-left: 16px;
    height: 56px;
    width: 33px;
`;

const Title = styled.div`
/* 홈하고 딱 맞는 사이즈!!! */
    margin-left: 113.79px; 
    display: inline-block;
    /* background: green; */
    width: 100px;
    height: 56px;
    padding-top: 18px;    
    padding-bottom: 18px;
    h1 {
        font-size: 18px;
        font-weight: bold;
    }
`;

const Body = styled.div`
    margin-top: 10px;
    background: tomato;
    width:100%;
    height: 80vh;
    border-top-left-radius: 20px;
`;

const Search = () => {
    return (
        <>
            <Header>
                <BackClick>
                    <Link to="/"><BackImg src={back} alt="뒤로 가기" /></Link>
                </BackClick>
                <Title>
                    <h1>따미마을</h1>
                </Title>
            </Header>
            {/* 작품(Work),재료(Material),작가(Artist) 탭을 위한 서브라우터 */}
            <Input placeholder="검색바~~~~~😋" allowClear/>
            <Body>
                <SubMenus />
            </Body>
        </>
    );
};

export default Search;