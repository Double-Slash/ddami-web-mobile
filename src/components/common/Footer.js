import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Bottom = styled.div`
width: 95%;
resize: none;
border: none;
height: 100px;
background-color:#D8D8D8;
font-size:13px;
padding-left:1.3em;
padding-bottom:1.0em;
padding-top:1.0em;
padding-right:1.0em;
text-align:center;
word-spacing:2px;
a:link{
    text-decoration:none;
    color:black;
    }
a:visited{
    text-decoration:none;
    color:black;
    }  
`;

const Second = styled.div`
padding-bottom:0.5em;
padding-top:0.5em;
text-decoration:none;
font-color:black;
font-size:13px;
`;

const Copyright = styled.div`
padding-bottom:0.5em;
padding-top:0.5em;
text-decoration:none;
font-color:black;
font-size:13px;
`;

const Footer = () => (
    <Bottom>
        <Link to='/'>따미 소개</Link> | <Link to='/'>이용약관</Link> | <Link to='/'>개인정보처리방침</Link> 
        <Second><Link to='/'>자주 묻는 질문</Link> | <Link to='/'>고객센터</Link> | <Link to='/'>재휴 문의</Link> </Second>
        <Copyright>copyRight DDami Inc. All Rights Reserved</Copyright>
    </Bottom>    
)

export default Footer;