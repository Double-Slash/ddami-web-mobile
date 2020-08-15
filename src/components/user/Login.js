import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";

const Form= styled.div`
  margin-bottom: 1.5em;
  margin-top: 2.5em;
  margin-left: 1.5em;
  line-height: 1em;
  text-align: left;
  font: Bold 16px/18px NanumSquare;
  letter-spacing: 0px;
  color: #232323; 
  opacity: 0.8;
`;

const LoginLetter= styled.div`
  top: 156px;
  left: 46px;
  width: 129px;
  height: 53px;
  text-align: left;
  font: 54px NanumSquare;
  letter-spacing: 0px;
  color: black;
  opacity: 1;
  margin-bottom:1.5em;
`;

 const IDInput= styled.input`
 top: 292px;
 left: 62px;
 width: 298px;
 height: 51px;
 opacity: 1;
 border: none;
 border-bottom: solid 1px #ababab;
 margin-left: 2.5em;
`;

const Passwords= styled.input`
 top: 292px;
 left: 62px;
 width: 298px;
 height: 51px;
 opacity: 1;
 border: none;
 border-bottom: solid 1px #ababab;
 margin-left:2.5em;
`;

const Forgot = styled.div`
  padding: 38px 63px;
  font-size: 13px;
  text-align: right;
  margin-right:1.5em;
  & > a {
    color: #3C3C3C;
    text-decoration: none;
    margin: 0 8px;
  }
`

const Button=styled.div`
  top: 502px;
  left: 36px;
  width: 306px;
  height: 49px;
  background: #3E309D 0% 0% no-repeat padding-box;
  border-radius: 25px;
  opacity: 1;
  text-align: center;
  font: Bold 15px/17px NanumSquare;
  letter-spacing: 0px;
  color: #E4E4E4;
  opacity: 1;
  padding-top:0.5em;
`;

const Allow=styled.div`
  text-align: left;
  font: Regular 14px/16px NanumSquare;
  letter-spacing: 0px;
  color: #8B8B8B;
  opacity: 1;
  float:left;
`;

const LinkJoin=styled.div`
  font: Bold 14px/16px NanumSquare;
  color: #232323;
  text-align:center;
  
`;
function Login(){
    return(
        <div name="header">
          <Form>
            <LoginLetter>Login</LoginLetter>
            아이디<br/>
            <IDInput type = "text" name = "id"/><br/>
            비밀번호<br/>
            <Passwords type = "text" name = "password"/><br/>  
            <Forgot>
            비밀번호를 잊으셨나요?
            </Forgot><br/>
            <Button type="submit">로그인</Button><br/>
            <Allow>회원이 아니십니까?</Allow><LinkJoin>회원가입</LinkJoin>

          </Form>
        </div>
    );
}


export default Login;