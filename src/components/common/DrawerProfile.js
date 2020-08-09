import React from 'react';
import styled from 'styled-components';
import profileImage from '../img/img-profile1-mid/img-profile1-mid.png';

const ProfileSection = styled.div`
  background: deeppink;
  margin-top: 48px;
  width: 100%;
  height: 152px;
  text-align: center;
`;

const ImgProfile = styled.img`
  background: tomato;
`;

const ProfileName = styled.div`
    //margin-top: 23px;
    font-size: 16px;
    color: #232323;
`;

const ProfileMajor = styled.div`
    margin-top: 13px;
    font-size: 13px;
    color: #4D4D4D;
`;


const DrawerProfile = () => {
    return (
        <>
            <ProfileSection>
                <ImgProfile src={profileImage} alt="프로필 사진" />
                <ProfileName>김따미</ProfileName>
                <p>시각디자인과</p>
            </ProfileSection>

        </>
    );
};

export default DrawerProfile;