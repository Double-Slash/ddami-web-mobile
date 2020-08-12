import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Footer = styled.div`
  background-color: #F1EFFE;
  padding: 38px 63px;
  font-size: 13px;
  text-align: center;
  & > a {
    color: #3C3C3C;
    text-decoration: none;
    margin: 0 8px;
  }
`


const Copyright = styled.div`
  font-size: 12px;
  margin-top: 27px;
`;

export default () => (
    <Footer>
        <Link to='/'>따미 소개</Link>|<Link to='/'>이용약관</Link>|<Link to='/'>개인정보처리방침</Link><br/>
        <Link to='/'>자주 묻는 질문</Link>|<Link to='/'>고객센터</Link>|<Link to='/'>제휴 문의</Link>
        <Copyright>Copyright © DDAMI Inc. All rights reserved.</Copyright>
    </Footer>
)