//미대생 인증 완료 페이지
import React from 'react';
import styled from 'styled-components';
import MAuth from './MembershipAuth';


const Complete = styled.div`
    text-align: center;
    font-color: #848484;
    padding-bottom: 3.0em;
    font-size: 1.5em;
`;

const Share = styled.div`
    text-align: center;
    font-color:#BDBDBD;
    padding-bottom:3.0em;
`;

const AroundDdami = styled.div`
   padding-top:2.0em;
    text-align: center;
    background-color:#2E2E2E;
	border-radius:28px;
    border: 1px solid black; 
    border-radius: 2em;
    padding:16px 31px;
    float:center;
    color:#FFFFFF;
    margin-top : 20px;
`;


function AuthComplete(){
    return(
        <div name="authComplete">
            <Complete>인증이 완료되었습니다!</Complete>
            <Share>당신의 작업물을 공유하세요:)</Share>
            <AroundDdami>따미마을 둘러보기</AroundDdami>
        </div>
    );
}
export default AuthComplete;