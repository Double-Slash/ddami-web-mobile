import React from "react";
import styled from "styled-components";

const Checkbox = styled.div`
  display: inline;
  margin: 10px;
`;

const ButtonLabel = styled.span`
  margin-left: 3px;
  font-size: 12px;
`;

const ConfigCheckbox = (props) => {
    const {name, value, onChange, now} = props;
    return (
        <Checkbox>
            <input
                type="checkbox"
                value={value}
                checked={now.includes(value)}
                onChange={onChange}
            />
            <ButtonLabel>{name}</ButtonLabel>
        </Checkbox>
    );
};

export default ConfigCheckbox;
