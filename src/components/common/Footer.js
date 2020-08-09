import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Bottom = styled.div`
width: 95%;
resize: none;
border: none;
height: 100px;
background-color:#F2F2F2;
font-size:1.0em;
padding-left:1.3em;
padding-bottom:1.0em;
padding-top:1.0em;
`;

const Copyright = styled.div`
padding-bottom:1.0em;
padding-top:1.0em;
`;

const Footer = () => (
    <Bottom>
        <Link to='/'>따미 소개</Link>|<Link to='/'>이용약관</Link>|<Link to='/'>개인정보 처리방침</Link>|
        <Link to='/'>자주 묻는 질문</Link>|<Link to='/'>고객센터</Link>|<Link to='/'>제휴 문의</Link>|
        <Copyright>copyright DDami Inc. All Rights Reserved</Copyright>
    </Bottom>
)

export default Footer;