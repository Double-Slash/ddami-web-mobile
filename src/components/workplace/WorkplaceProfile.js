import React, { useEffect } from 'react';
import styled from 'styled-components';
import ModifyButton from "./ModifyButton";

const ProfileBody = styled.div`
  display: flex;
  padding: 20px;
  font-size: 13px;
  color: #4D4D4D;
`
const ProfileImage = styled.div`
  width: 88px;
  height: 88px;
  background-color: black;
`

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-top: 5px;
  width: calc(100vh-88px);
`

const ProfileInformation = styled.div`
`

const Name = styled.span`
  font-size: 15px;
  font-weight: 800;
`

const Id = styled.span`
  margin-left: 10px;
  font-weight: 300;
  color: #BBBBBB;
`

const Department = styled.div`
  color: #808080;
  margin: 5px 0px;
`

const Major = styled.div`
  font-size: 12px;
`

const ProfileFollow = styled.div`
  margin: 15px 0px;
`


const WorkPlaceProfile = (props) => {

  return(
    <ProfileBody>
      <ProfileImage/>
      <Profile>
        <ProfileInformation>
          <Name>이실명</Name>
          <Id>@id123</Id>
          <ModifyButton/>
          <Department>시각디자인학과</Department>
          <Major>그래픽디자인 공간디자인</Major>
        </ProfileInformation>
        <ProfileFollow>
          팔로워 15
          팔로우 20
        </ProfileFollow>
      </Profile>
    </ProfileBody>
  )
}

export default WorkPlaceProfile