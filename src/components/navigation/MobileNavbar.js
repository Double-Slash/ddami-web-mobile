import React from 'react';
import styled from 'styled-components';
import mobileNavIcon from '../../images/menu.svg'
import mobileSearch from '../../images/search.svg'
import moblieAnnouncement from '../../images/announcement.svg'

const MyMobileNavbar = styled.nav`
    display:flex;
    flex-flow:row nowrap;
    /* justify-content: space-evenly; */
    align-items:center;

    background: #2a9d8f;
    color: white;

    height: 8vh;
    .logo {
        font-weight:bold;
    }

`;

const MyMobileNavButton = styled.button`
    background: transparent;
    height: 4rem;
    width: 4rem;
    border: none;
    display:none;

    @media screen and (max-width:768px) {
        display:block;
    }
`;

const NavRight = styled.div`
    display:flex;
    margin-left:10rem;
`;

const MobileNavbar = props => {
    return (
        <MyMobileNavbar>

            <MyMobileNavButton
                onClick = { props.toggleDrawerNavbar }
            >
                <img src={mobileNavIcon} alt="mobileNavIcon"/>
            </MyMobileNavButton>

            <div className="logo">따미로고🐳</div>

            <NavRight>
                <div className="search">
                    <img src={mobileSearch} alt="mobileSearch"/>
                </div>

                <div className="announce">
                    <img src={moblieAnnouncement} alt="moblieAnnouncement"/>
                </div>
            </NavRight>
  


        </MyMobileNavbar>
    );
};

export default MobileNavbar;