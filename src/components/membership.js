import React,{useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Provider, useDispatch} from "react-redux";
const Email=styled.input`
border: none;
font-size: 1.0em;
border-bottom: solid 1px #ababab;
font-weight: bold;
height:10%;
margin-top: 1.5em;
margin-bottom: 1.5em;
`;
const Id=styled.input`
border: none;
font-size: 1.0em;
border-bottom: solid 1px #ababab;
font-weight: bold;
height:10%;;
margin-bottom: 1.5em;
`;
const Password=styled.input`
border: none;
font-size: 1.0em;
border-bottom: solid 1px #ababab;
font-weight: bold;
height:10%;;
margin-bottom: 1.5em;
`;

const Name =styled.input`
border: none;
font-size: 1.0em;
border-bottom: solid 1px #ababab;
font-weight: bold;
height:10%;
margin-bottom: 1.5em;

`;

const Year =styled.input`
border: none;
border-bottom: solid 1px #ababab;
`;
const Phone =styled.input`
border: none;
font-size: 1.0em;
border-bottom: solid 1px #ababab;
font-weight: bold;
margin-bottom: 1.5em;
float:left;
`;

const Passnumber =styled.input`
border: none;
font-size: 1.0em;
border-bottom: solid 1px #ababab;
font-weight: bold;
height:10%;;
margin-bottom: 1.5em;
`;

const Select = styled.select`
border: none;
font-size: 1.0em;
border-bottom: solid 1px #ababab;
font-weight: bold;
margin-bottom: 1.5em;
`;

const Form = styled.div`
    text-align: center;
    margin-bottom:1.5em;
    margin-top:1.5em;
    line-height:1.0em
`;
function Membership(props){

    

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const postJoin = (Form) => {
    return fetch(" http://222.251.129.150", Form)
      .then(alert("1"))
      .then(this.props.history.push("/"))
      .catch(err => {
          throw alert("DB오류");
      })
  };
  

//폼
    return (
          //
          <div className = "Membership">
          <Form onSubmit={onSubmit}>
             이메일
            <Email type="text" name ="Eamil"/><br/>
            아이디 
            <Id type = "text"/> <input type="submit" value= "중복확인" maxlength="15"/><br/>
            비밀번호
            <Password type = "text" type = "password" name = "password" maxlength="15"/><br/>
            비밀번호 확인
            <Password type="text" type = "password" name = "passwordCheck" maxlength="15"/><br/>
            이름
            <Name type="text"/><br/>
            생년월일<br/>
            <Year type="text" placeholder="년(4자)"/> 
            <Select name="month">
                <option value = "1월">1월</option>
                <option value = "2월">2월</option>
                <option value = "3월">3월</option>
                <option value = "4월">4월</option>
                <option value = "5월">5월</option>
                <option value = "6월">6월</option>
                <option value = "7월">7월</option>
                <option value = "8월">8월</option>
                <option value = "9월">9월</option>
                <option value = "10월">10월</option>
                <option value = "11월">11월</option>
                <option value = "12월">12월</option>
            </Select>
            <Year type="text" placeholder="일"/><br/> 
            성별<br/>
            여성 <input type="radio" value="여성"/> 남성 <input type="radio" value="남성"/><br/>
            휴대번호/인증번호<br/>
            <Phone type="text"/><input type="submit" value="인증번호 받기"/>
            <Passnumber type="text" placeholder="인증번호를 입력하세요"/><br/>
            <button type="submit">회원가입</button>
          </Form>
          </div>
      );
}
  export default Membership;