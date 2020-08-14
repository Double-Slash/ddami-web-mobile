import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import WorkplaceCategory from "./WorkplaceCategory";

const ListBody = styled.section`
  background-color: #FFFFFF;
  margin-top: 8px;
`

const ImageList = styled.section`
  display: grid;
  padding: 18px;
  grid-template-columns: 1fr 1fr;
`

const Image = styled.img`
  width: 155px;
  height: 155px;
  border-radius: 0px 16px 16px 16px;
  margin-bottom: 14px;
  background-color: #61dafb;
`

export default (props) => {
  const { history, myPieces } = props
  const [selectTab, setSelectTab] = useState(0);
  const handleClickImage = (id) => history.push(`work/${id}`)

  return(
    <ListBody>
      <WorkplaceCategory selectTab={selectTab} setSelectTab={setSelectTab}/>
      <ImageList>
        { myPieces.map((piece) => {
          const {_id, fileUrl} = piece
          return <Image key={_id} src={fileUrl[0]} onClick={() => handleClickImage(_id)}/>
        })}
      </ImageList>
    </ListBody>
  )
}