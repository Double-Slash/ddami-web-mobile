import React from "react";
import styled from "styled-components";

const Header = styled.div`
  width: 95%;
  resize: none;
  border: none;
  height: 100px;
  background-color: #d8d8d8;
  font-size: 20px;
  padding-left: 1.3em;
  padding-bottom: 1em;
`;

const Profile = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-radius: 70%;
  float: left;
  margin-right: 0.5em;
  background-color: #a4a4a4;
`;

const Major = styled.div`
  font-size: 12px;
  font-color: #6e6e6e;
  padding-bottom: 0.7em;
  padding-top: 0.7em;
`;

const Nickname = styled.div`
  font-size: 15px;
  padding-bottom: 0.7em;
`;

const Won = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid black;
  border-radius: 70%;
  margin-right: 0.5em;
  float: right;
  background-color: #a4a4a4;
  font-size: 0.5em;
  text-align: center;
`;

function Headers() {
  return (
      <div name="header">
        <Header>
          작품 제목...
          <Major> 분야 1 . 분야 2</Major>
          <Profile/>
          <Nickname>뚱이</Nickname>
          <Won>₩</Won>
          <Won>하트</Won>
        </Header>
      </div>
  );
}

export default Headers;
