import React from 'react';
import styled from 'styled-components';

const Title =styled.input`
width: 95%;
padding-bottom: 30px;
border: none;
font-size: 25px;
border-bottom: solid 1px #ababab;
font-weight: bold;
`;
const Texting = styled.textarea`
width: 95%;
resize: none;
border: none;
height: 500px;
`;


function Detail(){
  return (
        <div name="sangse">
           <Title type="text" placeholder="제목"></Title> 
           <Texting placeholder="내용을 입력하세요"></Texting>    
        </div>
    );
}

export default Detail;

