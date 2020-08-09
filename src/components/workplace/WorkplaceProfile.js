import React from 'react';
import styled from 'styled-components';
import { FollowButton as FB } from "../search/ResultArtist";

const ProfileBody = styled.div`
  display: flex;
  padding: 20px 0px 0px 20px;
  font-size: 13px;
  color: #3C3C3C;
  border-radius: 0px 0px 0px 16px;
  background-color: #FFFFFF;
`
const ProfileImage = styled.div`
  width: 92px;
  height: 92px;
  background-color: #61dafb;
  border-radius: 100%;
  box-shadow: 0px 3px 5px #F0F0F0;
`

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-top: 5px;
`

const ProfileInformation = styled.div`
  width: calc(100vw - 140px);
  border-bottom: 1px solid #F0F0F0;
  padding-bottom: 10px;
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

const Major = styled.div`
  color: #808080;
  margin: 5px 0px;
`

const Field = styled.div`
  font-size: 12px;
`

const ProfileFollow = styled.div`
  margin: 15px 0px;
  position: relative;
`

const FollowButton = styled(FB)`
  top: -8px;
  right: 7px;
`

const ModifyButton = styled(FB)`
  top: -85px;
  right: 7px;
`

const WorkPlaceProfile = (props) => {
  const {name, userId, major, field1, field2, follower, following, isFollowing} = props
  return(
    <ProfileBody>
      <ProfileImage/>
      <Profile>
        <ProfileInformation>
          <Name>{name}</Name>
          <Id>@{userId}</Id>
          {/*<ModifyButton/>*/}
          <Major>{major}</Major>
          <Field>{field1} ・ {field2}</Field>
        </ProfileInformation>

        <ProfileFollow>
          팔로워 15 ・
          팔로우 20
          {!isFollowing && <FollowButton>+Follow</FollowButton>}
          {isFollowing && <ModifyButton>+Modify</ModifyButton>}
        </ProfileFollow>
      </Profile>
    </ProfileBody>
  )
}

export default WorkPlaceProfile