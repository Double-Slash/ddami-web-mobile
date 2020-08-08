import React from 'react';
import styled from 'styled-components';
import Slider from 'infinite-react-carousel';

const Img = styled.div`
width: 100%;
height: 182px;
z-index: 1;
`;

function Promotion() {
    return (
        <div>
            <Slider dots>
                <Img>hi</Img>
                <Img>hi</Img>
                <Img>hi</Img>
            </Slider>
        </div>
    );
}

export default Promotion;