// 미대생 인증 
import React from 'react';
import styled from 'styled-components';
import MAuth from './MembershipComplete';
import Cameras from '../images/camera.svg';
const AuthForm = styled.div`
    margin-bottom:1.5em;
    margin-top:1.5em;
    line-height:1.0em;
    padding-left:1.0em;
`;

const School=styled.input`
border: none;
font-size: 1.0em;
border-bottom: solid 1px #ababab;
font-weight: bold;
height:10%;
margin-top: 1.5em;
margin-bottom: 1.5em;
top: 109px;
left: 25px;
width: 139px;
height: 18px;
text-align: left;
font: Regular 17px/19px NanumSquare;
letter-spacing: 0px;
color: #4D4D4D;
opacity: 1;
`;

const Scholarship=styled.input`
top: 202px;
left: 27px;
width: 108px;
height: 18px;
text-align: left;
font: Regular 17px/19px NanumSquare;
letter-spacing: 0px;
color: #4D4D4D;
opacity: 1;
border: none;
border-bottom: solid 1px #ababab;
margin-right: 1.0em;
margin-top: 1.5em;
${'' /*  */}
`;
const SchoolNumber =styled.input`
border: none;
border-bottom: solid 1px #ababab;
top: 202px;
left: 191px;
width: 102px;
height: 18px;
text-align: left;
font: Regular 17px/19px NanumSquare;
letter-spacing: 0px;
color: #4D4D4D;
opacity: 1;
margin-top: 1.5em;
`;

const Student = styled.div`
    top: 300px;
    left: 24px;
    width: 315px;
    height: 34px;
    text-align: left;
    font: Regular 13px/20px NanumSquare;
    letter-spacing: 0px;
    color: #808080;
    opacity: 1;
    margin-top: 1.5em;


`;

const Files = styled.div`
top: 352px;
left: 24px;
width: 220px;
height: 36px;
border: 1px solid #4D4D4D;
border-radius: 7px;
opacity: 1;
margin-top: 1.5em;
float:left;
margin-bottom: 1.0em;
`;

const Camera  = styled.div `
top: 352px;
left: 254px;
width: 36px;
height: 36px;
background: #4D4D4D 0% 0% no-repeat padding-box;
border-radius: 12px;
opacity: 1;
float:left;
margin-right: 1.0em;
margin-left:1.0em;

`;

const Clip  = styled.div `
top: 352px;
left: 254px;
width: 36px;
height: 36px;
background: #4D4D4D 0% 0% no-repeat padding-box;
border-radius: 12px;
opacity: 1;
float:left;
`;

const Article = styled.div `
top: 0px;
left: 0px;
width: 62px;
height: 17px;
text-align: left;
font: Bold 15px/13px NanumSquare;
letter-spacing: 0px;
color: #232323;
margin-right:0.5em;
margin-bottom:3.0em;
`;
const Article1 = styled.div `
top: 429px;
left: 24px;
width: 92px;
height: 17px;
text-align: auto;
letter-spacing: NaNpx;
color: #232323;
opacity: 1;
`;

const Makers = styled.div`
border: 1px solid #BBBBBB;
border-radius: 7px;
opacity: 1;
text-align: center;
font: Regular 13px/14px NanumSquare;
letter-spacing: 0px;
color: #808080;
opacity: 1;
top: 464px;
left: 24px;
width: 98px;
height: 37px;
margin-right:1.0em;
margin-bottom:1.0em;
float:left;
`;

const MakerForm = styled.div `
margin-bottom:10.0em;
`;

const Authbar = styled.div `
    text-align: center;
    font-color: #848484;
    padding-bottom: 3.0em;
    background: var(--unnamed-color-322fa0) 0% 0% no-repeat padding-box;
    background: #322FA0 0% 0% no-repeat padding-box;
    border-radius: 52px;
    opacity: 1;
    font: Regular 15px/17px NanumSquare;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    width: 312px;
    height: 44px;
`;
function MembershipAuth(){
    return(
        <div name="MembershipAuth">
        <AuthForm>
            학교<br/>
            <School type = "text"/><br/>
            학과/학번<br/>
            <Scholarship type = "text"/><SchoolNumber type = "text"/><br/>
            <br/>인증파일 첨부<br/>
            <Student>
            ※ 학생증 사진이나 개인정보(주민등록번호 필수)가 포함된 학교 포털사이트 화면 사진을 첨부해주세요
            </Student>
            <br/>
            <Files placeholder = "파일을 첨부하세요"/><Camera src={Cameras}/><Clip/>
            <br/>
            <Article>관심분야</Article>
            <br/>
            <br/>
            <MakerForm>
            <Makers>현대미술</Makers><Makers>그래픽 디자인</Makers><Makers>공예 디자인</Makers>
            <Makers>영상 디자인</Makers><Makers>산업 디자인</Makers><Makers>공간 디자인</Makers>
            <Makers>의상 디자인</Makers>
            </MakerForm>
            <br/>
            <Authbar>인증하기</Authbar>
            </AuthForm>
        </div>
    );
}
export default MembershipAuth;