import React, {useState} from 'react';
import styled from 'styled-components';
import ConfigRadioButton from "./ConfigRadioButton";
import ConfigCheckbox from "./ConfigCheckbox";
import CtgData from './category.json';
import FieldData from './fields.json';

const ConfigureDiv = styled.div`
  padding: 0px 20px;
`

const ConfigTitle = styled.p`
  color: #626262;
  font-size: 12px;
  font-weight: 700;
`

const Category = styled.div`
  margin: 20px auto;
`

const Field = styled.div`
`

const Configure = () => {
  const [category, setCategory] = useState(1)
  const [field, setField] = useState([])
  const { data: categoryData } = CtgData
  const { data: fieldData } = FieldData

  const onChangeField = (value) => {
    let fieldArr
    if (field.includes(value)){
      fieldArr = field.filter((v) => v!== value)
    } else fieldArr = [value,...field]
    setField(fieldArr)
  }
  return(
    <ConfigureDiv>
      <Category>
        <ConfigTitle>카테고리 설정</ConfigTitle>
        {categoryData.map((v)=>{
          return <ConfigRadioButton key={v.id} now={category} onChange={()=>setCategory(v.value)} {...v}/>
        })}
      </Category>
      <Field>
        <ConfigTitle>분야 설정</ConfigTitle>
        {fieldData.map((v)=>{
          return <ConfigCheckbox key={v.id} now={field} onChange={()=>onChangeField(v.value)} {...v}/>
        })}
      </Field>
    </ConfigureDiv>
  )
}

export default Configure