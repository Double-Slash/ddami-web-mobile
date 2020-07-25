import React from 'react';
import styled from 'styled-components';

const Bottom = styled.div`
width: 90%;
resize: none;
border: none;
height: 300px;
`;

function Footer(){
    return(
        <div name="footer">
            <Bottom>
                 <link to>따미 소개</link>|<link to>이용약관</link>|<link to>개인정보 처리방침</link>|
                 <link to>자주 묻는 질문</link>|<link to>고객센터</link>|<link to>재휴 문의</link>|
                 copyRight DDami Inc. All Rights Reserved
            </Bottom>    
        </div>
    );
}


export default Footer;