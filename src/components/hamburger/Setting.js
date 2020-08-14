import React from 'react';
import styled from 'styled-components';
import AccountIcon from "../../static/icons/img-setting-accout.svg"
import NoticeIcon from "../../static/icons/img-setting-notice.svg"
import AboutIcon from "../../static/icons/img-setting-aboutddami.svg"

import 'antd/dist/antd.css';
import {Switch} from 'antd';

const Body = styled.div`
  width: 100%;
  height: 100%;
  background: #F0F0F6;
`;

const SectionTitleFirst = styled.div`
  display: flex;
  padding-top: 21.9px;
  margin-bottom: 11px;
  //background: aquamarine;
  width: 100%;
  height: 41.9px;
`;

const SectionTitle = styled.div`
  display: flex;
  margin-top: 21.9px;
  margin-bottom: 11px;
  //background: aquamarine;
  width: 100%;
  height: 20px;
`;

const SectionImg = styled.img`
  margin-left: 18.12px;
`;

const SectionSubTitle = styled.div`
  margin-left:13.65px;
  font-size: 16px;
  font-weight: bold;
  color: #232323;
`;

const LinkSection = styled.div`
  background: #FFFFFF;
  padding-top: 21px;
  padding-left: 18px;
  padding-bottom: 6px;
  width: 100%;
  height: 187px;
  border-top-left-radius: 20px;
`;

const LinkSectionNotice = styled.div`
  background: #FFFFFF;
  padding-top: 21px;
  padding-left: 18px;
  padding-bottom: 6px;
  width: 100%;
  height: 106px;
  border-top-left-radius: 20px;
`;

const LinkListSection = styled.div`
  display: flex;
  justify-content: space-between;
  //background: yellow;
  margin-bottom: 24px;
  padding-right: 18px;
  width: 100%;
  height: 16px;
  font-size: 14px;
  color: #4D4D4D;
`;

const LinkSectionInfo = styled.div`
  background: #FFFFFF;
  padding-top: 21px;
  padding-left: 18px;
  padding-bottom: 6px;
  width: 100%;
  height: 308px;
  border-top-left-radius: 20px;
`;

const NoticeSetting = styled.div`

`;

const Version = styled.div`
  font-size: 12px;
  color: #BBBBBB;
`;
const Setting = () => {
    return (
        <>
            <Body>
                <SectionTitleFirst>
                    <SectionImg src={AccountIcon} alt="계정아이콘"/>
                    <SectionSubTitle>계정관리</SectionSubTitle>
                </SectionTitleFirst>
                <LinkSection>
                    <LinkListSection>연결된 계정</LinkListSection>
                    <LinkListSection>비밀번호 변경</LinkListSection>
                    <LinkListSection>탈퇴</LinkListSection>
                    <LinkListSection>로그아웃</LinkListSection>
                </LinkSection>
                <SectionTitle>
                    <SectionImg src={NoticeIcon} alt="계정아이콘"/>
                    <SectionSubTitle>알림</SectionSubTitle>
                </SectionTitle>
                <LinkSectionNotice>
                    <LinkListSection>
                        <NoticeSetting>알림 설정</NoticeSetting>
                        <Switch defaultChecked/>
                    </LinkListSection>
                    <LinkListSection>
                        <NoticeSetting>채팅 알림 소리</NoticeSetting>
                        <Switch defaultChecked/>
                    </LinkListSection>
                </LinkSectionNotice>
                <SectionTitle>
                    <SectionImg src={AboutIcon} alt="계정아이콘"/>
                    <SectionSubTitle>따미 정보</SectionSubTitle>
                </SectionTitle>
                <LinkSectionInfo>
                    <LinkListSection>
                        <NoticeSetting>버전</NoticeSetting>
                        <Version>1.0.1</Version>
                    </LinkListSection>
                    <LinkListSection>리뷰 및 별점 추가</LinkListSection>
                    <LinkListSection>CONTACT US</LinkListSection>
                    <LinkListSection>이용 약관</LinkListSection>
                    <LinkListSection>개인정보 취급방침</LinkListSection>
                    <LinkListSection>오픈 소스 라이센스 정보</LinkListSection>
                </LinkSectionInfo>
            </Body>
        </>
    );
};

export default Setting;
