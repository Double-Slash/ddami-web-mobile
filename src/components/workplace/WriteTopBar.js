import React from 'react';
import styled from 'styled-components';

const WriteTop = styled.div`
  height: 60px;
  padding: 0px 10px;
  display: flex;
  button {
    background-color: white;
    outline: none;
    border: none;
    .back {
      
    }
    .register {
      color: #3C3C3C;
      font-size: 16px;
    }
  }
`

const BackButton = styled.button`
  width: 10%;
`

const TemporarySave = styled.div`
  width: 75%;
`

const TempContent = styled.p`
  border: solid 1px grey;
  border-radius: 10px;
  padding: 5px;
  width: 30%;
  float: right;
  text-align: center;
`

const RegisterButton = styled.button`
  width: 15%;
`

export default ({history}) => {
  const routeBack = () => {
    history.push('/search')
  }
  return(
    <WriteTop>
      <BackButton onClick={routeBack} className='back'>X</BackButton>
      <TemporarySave>
        <TempContent>
          <button>임시저장</button>
          <span>3</span>
        </TempContent>
      </TemporarySave>
      <RegisterButton className='register'>등록</RegisterButton>
    </WriteTop>
  )
}