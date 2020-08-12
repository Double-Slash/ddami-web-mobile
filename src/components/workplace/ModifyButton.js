import React, { useEffect } from 'react';
import styled from 'styled-components';

const Button = styled.div`
  outline: none;
  background-color: #999999;
  color: #FFFFFF;
  display: inline;
  width: 58px;
  height: 24px;
  font-size: 12px;
`
const ModifyButton = () => {
  return (
    <Button>Modify</Button>
  )
}

export default ModifyButton