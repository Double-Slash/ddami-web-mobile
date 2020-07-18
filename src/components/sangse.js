import React from 'react';
import styled from 'styled-components';

const title =styled.div`
width: 80%;
padding-bottom: 30px;
border: none;
font-size: 25px;
border-bottom: solid 1px #ababab;
font-weight: bold;
`;
const texting = styled.div`
width: 91%;
resize: none;
border: none;
height: 500px;
`;
function Sangse(){
  return (
        <div className="sangse">
        <div>
           <title><input type="text" placeholder="제목"/></title> 
        </div>
        <div>
            <texting><textarea placeholder="내용을 입력하세요"></textarea></texting>
        </div>    
        </div>
    );
}

export default Sangse;

