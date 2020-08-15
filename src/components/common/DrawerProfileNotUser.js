import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import NotUserImg from '../../static/image/img-profile-default-mid.svg';

const ProfileSection = styled.div`
  //background: deeppink;
  margin-top: 48px;
  width: 100%;
  height: 152px;
  text-align: center;
`;

const ImgProfile = styled.img`
  //background: tomato;
  margin-bottom: 23px;
  width: 84px;
  height: 84px;
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


const DrawerProfileNotUser = () => {
    return (
        <>
            <ProfileSection>
                <ImgProfile  src={NotUserImg} alt="프로필 사진" />
                <ProfileName><Link to="/login">로그인</Link></ProfileName>
                <p>아직 회원이 아니신가요?</p>
            </ProfileSection>

        </>
    );
};

export default DrawerProfileNotUser;