import React from 'react';
import styled from 'styled-components';

const Bottom = styled.div`
width: 95%;
resize: none;
border: none;
height: 100px;
background-color:#D8D8D8;
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
       따미 소개|이용약관|개인정보 처리방침|<br/>
        자주 묻는 질문|고객센터|재휴 문의|<br/>
        <Copyright>copyRight DDami Inc. All Rights Reserved</Copyright>
    </Bottom>    
)

export default Footer;