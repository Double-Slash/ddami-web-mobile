//회원가입이 완료메세지
import React from 'react';
import styled from 'styled-components';
import Join from './Join';


const Complete = styled.div`
    text-align: center;
    font-color:#848484;
`;

const Notice1 = styled.div`
    text-align: center;
    font-color:#D8D8D8;
    padding-top:2.0em;

`;
const Notice2 = styled.div`
    text-align: center;
    font-color:#D8D8D8;
    padding-bottom: 7.0em;
`;

const AroundDdami = styled.div`
    padding-top:4.0em;
    text-align: center;
    background-color:#ffffff;
	border-radius:28px;
    border: 1px solid black; 
    border-radius: 2em;
    padding:16px 31px;
    float:center;
`;

const AuthMide = styled.div`
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

function MembershipComplete(){
    return(
        <div name="complete">
            <Complete>가입이 완료되었습니다!</Complete>
            <Notice1>※미대생 인증이 되어야만 </Notice1>
            <Notice2>작업실 사용이 가능합니다</Notice2>
            <AroundDdami>따미마을 둘러보기</AroundDdami>
            <AuthMide>미대생 인증하기</AuthMide>

        </div>
    );
}
export default MembershipComplete;