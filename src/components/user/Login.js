import React, {useEffect} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {setFooterVisible, setHeaderVisible} from "../../store/actions";
import kakao from '../../static/image/kakao_login_medium.png';
import g1 from '../../static/image/img_login_graphic1.svg';
import g2 from '../../static/image/img_login_graphic2.svg';
import g3 from '../../static/image/img_login_graphic3.svg';

const G1 = styled.div`
  position: absolute;
  z-index: -1;
`

const G2 = styled.div`
  position: absolute;
  z-index: -1;
  right: 0;
`

const G3 = styled.div`
  position: absolute;
  z-index: -1;
  right: 70px;
  top: 210px;
`

const Login = styled.div`
  min-height: 100vh;
  background-color: #322FA0;
  position: relative;
  z-index: 1;
`

const LoginForm = styled.div`
  z-index: 100;
  border-radius: 42px 0px 0px 0px;
  background-color: #FFF;
  margin-left: 18px;
  margin-top: 27px;
  padding: 56px 0px 56px 44px;
  
  & > label {
    color: #232323;
    font-size: 16px;
    font-weight: bold;
    display: block;
  }
  
  & > input {
    border: none;
    border-bottom: solid 1px #ababab;
    margin-bottom: 35px;
    width: 100%;
    margin-top: 10px;
    padding: 6px;
  }
`;

const Title= styled.div`
  font-size: 48px;
  color: #FFFFFF;
  padding: 156px 0px 0px 46px;
  font-weight: 900;
`;

const Forgot = styled.div`
  font-size: 13px;
  text-align: right;
  color: #8B8B8B;
  padding-right: 18px;
  margin-bottom: 33px;
  & > a {
    color: #8B8B8B;
    text-decoration: none;
  }
`

const LoginButton = styled.div`
  height: 49px;
  padding: 16px 0px;
  background-color: #3E309D;
  border-radius: 25px;
  text-align: center;
  color: #E4E4E4;
  font-size: 15px;
  font-weight: bold;
  margin: 0px 18px 20px 0px;
`;

const Join = styled.div`
  text-align: center;
  margin-right: 18px;
  color: #8B8B8B;
  & > a {
    font-weight: bold;
    margin-left: 8px;
  }
`

const SocialLogin = styled.div`
  margin-top: 52px;
  text-align: center;
  margin-right: 18px;
  color: #8B8B8B;
  font-size: 12px;
  & > img {
    width: 80px;
  }
`



export default () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(setFooterVisible(false))
    dispatch(setHeaderVisible(false))
    return () => {
      dispatch(setHeaderVisible(true))
      dispatch(setFooterVisible(true))
    }
  })
  return(
      <Login>
        <G1><img src={g1}/></G1>
        <G2><img src={g2}/></G2>
        <G3><img src={g3}/></G3>
        <Title>Login</Title>
        <LoginForm>
          <label>아이디</label>
          <input type="text" name="id"/>
          <label>비밀번호</label>
          <input type="password" name="password"/>
          <Forgot>비밀번호를 잊으셨나요?</Forgot>
          <LoginButton>로그인</LoginButton>
          <Join>회원이 아니십니까?<Link to='/join'>회원 가입</Link></Join>
          <SocialLogin>
            <p>다음 계정으로 로그인</p>
            <img src={kakao}/>
          </SocialLogin>
        </LoginForm>
      </Login>
    );
}