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
  & > img {
  width: 92px;
  height: 92px;
  background-color: #F0F0F0;
  border-radius: 100%;
  box-shadow: 0px 3px 5px #F0F0F0;
  }
  
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
  const { userName, userId, major, likeField, imageUrl, follow, followerCount, type} = props
  return(
    <ProfileBody>
      <ProfileImage><img src={imageUrl}/></ProfileImage>
      <Profile>
        <ProfileInformation>
          <Name>{userName}</Name>
          <Id>@{userId}</Id>
          <Major>{major}</Major>
          <Field>{likeField && likeField[0]} ・ {likeField && likeField[1]}</Field>
        </ProfileInformation>

        <ProfileFollow>
          팔로워 {followerCount} ・
          팔로우 20
          {!type && !follow && <FollowButton>+Follow</FollowButton>}
          {!type && follow && <FollowButton>+Follow</FollowButton>}
          {type && <ModifyButton>+Modify</ModifyButton>}
        </ProfileFollow>
      </Profile>
    </ProfileBody>
  )
}

export default WorkPlaceProfile