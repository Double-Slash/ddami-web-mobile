import React from "react";
import styled from "styled-components";
import Slider from "infinite-react-carousel";

const Img = styled.div`
  width: 100%;
  height: 182px;
  z-index: 1;
`;

function Promotion() {
    return (
        <div>
            <Slider dots>
                <Img>
                    <img src="/img-main-banner1.svg" alt="promotion" width="100%" height="100%"/>
                </Img>
            </Slider>
        </div>
    );
}

export default Promotion;
