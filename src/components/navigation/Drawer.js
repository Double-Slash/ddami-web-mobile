import React from 'react';
import Navlinks from './Navlinks';
import styled from 'styled-components';
import profileImage from '../../images/profile.svg';

const MyDrawer = styled.div`
    width: 70vw;
    background: #e9c46a;
    /* align-self: stretch; */
    /* 왜쓴거지? ㅋㅋㅋㅋ */
    margin-bottom: 15px; 

    display:flex;
    flex-flow:column nowrap;

    /* 왼쪽으로 들어가는거야 */
    transition: transform 1s;
    transform: translateX( ${ props => props.displayMobileNavbar? ("0%") :("-100%")});
`;

const MyDrawerLink = styled.nav`
     .nav-links {
        margin-left: 2rem;
        display:flex;
        flex-flow:column nowrap;
        justify-content: space-evenly;
        /* align-items:left; */

        height: 80vh;

        list-style:none;
    }

    .link {
        color:white;
        text-decoration:none;
    }
`;

const Myprofile = styled.div`
    height: 10rem;
    text-align: center;
    .photo {
        height: 7rem;
        /* background: red; */
        img {
            margin-top: 2rem;
        }
    }
    .name {
        margin-top: 1rem;
        font-weight: bold;
    }
    .department {
        text-align:center;
    }
    .department:after {
        margin-top: 1rem;
        content:"";
        display:block;
        width: 13rem;
        border-bottom: 1px solid #000000;
        margin: 20px auto;
    }

`;


const Drawer = props => {
    return (
        <MyDrawer displayMobileNavbar={props.displayMobileNavbar}>
            {/* profile */}
            <Myprofile>
                <div className="photo">
                    <img src={profileImage} alt="profileImage"/>
                </div>
                <div className="name">
                    김따미
                </div>
                <div className="department">
                    시각디자인과
                </div>
            </Myprofile>

            <MyDrawerLink>
                <Navlinks />
            </MyDrawerLink>
        </MyDrawer>
    );
};

export default Drawer;