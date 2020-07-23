import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Bottom = styled.div`
  width: 90%;
  resize: none;
  border: none;
  height: 300px;
`;

const Footer = () => (
    <Bottom>
        <Link to='/introduce'>따미 소개</Link>|<Link to='/term'>이용약관</Link>|<Link to='/privacy'>개인정보 처리방침</Link>|
        <Link to='/faq'>자주 묻는 질문</Link>|<Link to='/contact'>고객센터</Link>|<Link to='/contact'>제휴 문의</Link>|
        copyRight DDami Inc. All Rights Reserved
    </Bottom>    
)

export default Footer;