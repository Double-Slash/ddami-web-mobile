// 미대생 인증 
import React from 'react';
import styled from 'styled-components';
import MAuth from './MembershipComplete';

const AuthForm = styled.div`
    text-align: left;
    margin-bottom:1.5em;
    margin-top:1.5em;
    line-height:1.0em;
    padding-left:1.0em;
`;

const School=styled.input`
border: none;
font-size: 1.0em;
border-bottom: solid 1px #ababab;
font-weight: bold;
height:10%;
margin-top: 1.5em;
margin-bottom: 1.5em;
`;

const Scholarship=styled.input`
border: none;
font-size: 1.0em;
border-bottom: solid 1px #ababab;
font-weight: bold;
height:10%;
margin-top: 1.5em;
margin-bottom: 1.5em;
`;
const SchoolNumber =styled.input`
border: none;
border-bottom: solid 1px #ababab;
`;
function MembershipAuth(){
    return(
        <div name="MembershipAuth">
        <AuthForm>
            학교<br/>
            <School type = "text"/><br/>
            학과/학번<br/>
            <Scholarship type = "text"/><SchoolNumber type = "text"/>
            </AuthForm>
        </div>
    );
}
export default MembershipAuth;