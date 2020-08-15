import React from 'react';
import styled from 'styled-components';

const LoginForm=`
top: 236px;
left: 18px;
width: 342px;
height: 504px;
background: #FFFFFF 0% 0% no-repeat padding-box;
border-radius: 42px 0px 0px 0px;
opacity: 1;
text-align: left;
font: Bold 16px/18px NanumSquare;
letter-spacing: 0px;
color: #232323;
opacity: 0.8;
`;

const IDInput=`
top: 292px;
left: 62px;
width: 298px;
height: 51px;
opacity: 1;
margin-bottom : 2.0em;
`;

const passwordInputt=`
top: 292px;
left: 62px;
width: 298px;
height: 51px;
opacity: 1;
margin-bottom : 2.0em;
`;

const Forgot=`
text-align: right;
font: Regular 14px/63px NanumSquare;
letter-spacing: 0px;
color: #8B8B8B;
opacity: 1;
`;

const Button=`
background: #3E309D 0% 0% no-repeat padding-box;
border-radius: 25px;
opacity: 1;
top: 518px;
left: 169px;
width: 41px;
height: 17px;
text-align: right;
font: Bold 15px/17px NanumSquare;
letter-spacing: 0px;
color: #E4E4E4;
opacity: 1;
`;
function Login(){
    return(
        <div name="header">
          <LoginForm>
            아이디
            <IDInput type = "text" name = "id"/>
            비밀번호
            <passwordInputt type = "password" name = "password"/>  
            <Forgot>비밀번호를 잊으셨나요?</Forgot>
            <Button type="submit">회원가입</Button>
          </LoginForm>
        </div>
    );
}


export default Login;