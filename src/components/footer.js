import React from 'react';
import styled from 'styled-components';

const bottom = styled.bottom`
width: 90%;
resize: none;
border: none;
height: 300px;
`;

const Footer = () => (
    <bottom>
        <link to>따미 소개</link>|<link to>이용약관</link>|<link to>개인정보 처리방침</link>|
        <link to>자주 묻는 질문</link>|<link to>고객센터</link>|<link to>재휴 문의</link>|
        copyRight DDami Inc. All Rights Reserved
    </bottom>    
)

export default Footer;