import React, { useEffect } from 'react';
import styled from 'styled-components';
import ModifyButton from "./ModifyButton";

const ProfileBody = styled.div`
  display: flex;
  padding: 20px;
  font-size: 13px;
  color: #4D4D4D;
  border-radius: 0px 0px 0px 16px;
  background-color: #FFFFFF;
`
const ProfileImage = styled.div`
  width: 88px;
  height: 88px;
  background-color: black;
  border-radius: 100%;
  box-shadow: 0px 3px 5px #0000001A;
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
  const {name, userId, major, field1, field2, follower, following} = props
  return(
    <ProfileBody>
      <ProfileImage/>
      <Profile>
        <ProfileInformation>
          <Name>{name}</Name>
          <Id>@{userId}</Id>
          {/*<ModifyButton/>*/}
          <Department>{major}</Department>
          <Major>{field1} ・ {field2}</Major>
        </ProfileInformation>
        <ProfileFollow>
          팔로워 15 ・
          팔로우 20
        </ProfileFollow>
      </Profile>
    </ProfileBody>
  )
}

export default WorkPlaceProfile