import React from "react";
import styled from "styled-components";

const RadioButton = styled.div`
  display: inline;
  margin: 10px;
`;

const ButtonLabel = styled.span`
  margin-left: 3px;
  font-size: 12px;
`;

const ConfigRadioButton = (props) => {
    const {name, value, onChange, now} = props;
    return (
        <RadioButton>
            <input
                type="radio"
                value={value}
                checked={now === value}
                onChange={onChange}
            />
            <ButtonLabel>{name}</ButtonLabel>
        </RadioButton>
    );
};

export default ConfigRadioButton;
