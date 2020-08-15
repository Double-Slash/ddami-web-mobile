import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Complete from "./JoinComplete";
import { SearchNavbar } from "../search/Search";
import {setFooterVisible, setHeaderVisible} from "../../store/actions";

const IdInput = styled.input`
  min-width: 72%;
`;

const PasswordInput = styled.input`
  min-width: 100%;
`;

const NameInput = styled.input`
  min-width: 100%;
`;

const YearInput = styled.input`
  width: 30%;
`;

const SelectInput = styled.select`
  width: 30%;
`;

const Form = styled.div`
  margin-top: 60px;
  padding: 30px 25px 0px 25px;
  text-align: left;
  
  & > label {
    display: block;
    color: #232323;
    font-weight: 700;
    font-size: 15px;
    margin-bottom: 12px;
  }
  
  & > input , select {
    border: none;
    height: 28px;
    margin-right: 3%;
    border-bottom: 1px solid #282c34;
    margin-bottom: 40px;
    padding: 0px 0px 3.5px 4.5px;
    font-size: 15px;
    &::placeholder {
      color: #BBBBBB;
    }
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  margin: 79px auto 0px auto;
  background-color: #322FA0;
  border-radius: 52px;
  color: #FFFFFF;
  font-size: 15px;
  height: 44px;
  border: none;
`

const CheckButton = styled.button`
  height: 28px;
  background-color: #4D4D4D;
  border-radius: 6px;
  color: #FFFFFF;
  border: none;
  font-size: 12px;
  width: 77px;
  margin-left: auto;
`
const Radio = styled.div`
  display: flex;
`

const RadioInput = styled.input`
  width: 22px;
  height: 22px;
  border-color: #AAAAAA;
`

const RadioText = styled.span`
  margin: 0px 32px 0px 9.5px;
`

function Join() {
  const [Email, setEmail] = useState("");
  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(setFooterVisible(false))
    dispatch(setHeaderVisible(false))
    return () => {
      dispatch(setHeaderVisible(true))
      dispatch(setFooterVisible(true))
    }
  })

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onIdHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onPasswordHanlder = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onNameHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onSubmit = (Form) => {
    return (
      fetch(" http://222.251.129.150", Form)
        // .then(alert("1"))
        .then(this.props.history.push("/"))
        .catch((err) => {
          throw alert("DB오류");
        })
    );
  };

  return (
    <div className="Membership">
      <SearchNavbar text='회원가입'/>
      <Form onSubmit={onSubmit}>
        <label>아이디</label>
        <IdInput type="text" value={Id} onChange={onIdHandler} />
        <CheckButton>중복 확인</CheckButton>
        <label>비밀번호</label>
        <PasswordInput
          type="password"
          maxlength="15"
          value={Password}
          onChange={onPasswordHanlder}
        />
        <label>비밀번호 확인</label><PasswordInput type="password" maxlength="15" />
        <label>이름</label><NameInput type="text" value={Name} onChange={onNameHandler} />
        <label>생년월일</label><YearInput type="number" placeholder="년(4자)" />
        <SelectInput name="month">
          {[...Array(12).keys()].map((idx) => { return <option value={idx+1}>{idx+1}월</option>})}
        </SelectInput>
        <YearInput type="number" placeholder="일" />
        <label>성별</label>
        <Radio>
          <RadioInput type="radio" value="여성" /><RadioText>여성</RadioText>
          <RadioInput type="radio" value="남성" /><RadioText>남성</RadioText>
        </Radio>
        <SubmitButton type="submit" onClick={Complete}>가입하기</SubmitButton>
      </Form>
    </div>
  );
}
export default Join;
