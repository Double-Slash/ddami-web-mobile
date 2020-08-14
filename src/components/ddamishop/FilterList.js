import React from "react";
import {useLocation} from "react-router-dom";
import styled from "styled-components";

const FilterListWrapper = styled.div`
  display: inline-block;
  margin: 19px;
`;

const FilterItem = styled.div`
  font-size: 13px;
  font-weight: bold;
  margin: auto;
`;

const FilterName = styled.p`
  z-index: 2;
`;

const Point = styled.div`
  background-color: #e6e6fa;
  border-radius: 5px;
  width: 100%;
  height: 16px;
  position: relative;
  margin-top: -24px;
  margin-left: 2px;
  z-index: -1;
`;

const SelectButton = styled.div`
  display: inline-block;
  margin: 5px;
  border-radius: 14px;
  border: 1px solid #322fa0;
`;

const SelectText = styled.p`
  font-size: 13px;
  color: #322fa0;
  padding: 7px 14px;
  margin: 0;
`;

function FilterList(props) {
    const location = useLocation();
    if (location.pathname === "/shop/pieces") {
        return (
            <FilterListWrapper>
                <FilterItem>
                    <FilterName>전체</FilterName>
                    <Point/>
                </FilterItem>
            </FilterListWrapper>
        );
    }
    return (
        <FilterListWrapper>
            <SelectButton>
                <SelectText>판매</SelectText>
            </SelectButton>
            <SelectButton>
                <SelectText>나눔</SelectText>
            </SelectButton>
        </FilterListWrapper>
    );
}

export default FilterList;
