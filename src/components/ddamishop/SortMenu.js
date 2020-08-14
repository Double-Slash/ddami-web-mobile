import React from "react";
import styled from "styled-components";

const SortMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  margin: 18px;
  font-size: 13px;
  color: #4a4a4a;
`;

const SortItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const VerticalBar = styled.p`
  height: 17px;
  margin: 13px 3px;
`;

const Filter = styled.p``;

function SortMenu(props) {
    return (
        <SortMenuWrapper>
            <SortItemWrapper>
                <p>인기순</p>
                <VerticalBar>|</VerticalBar>
                <p>최신순</p>
                <VerticalBar>|</VerticalBar>
                <p>거리순</p>
            </SortItemWrapper>
            <div>
                <Filter>필터</Filter>
            </div>
        </SortMenuWrapper>
    );
}

export default SortMenu;
