import React, {useState} from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';

const NavigationBar = styled.div`
display: inline-block;
width: 100%;
height: 2.5rem;
vertical-align: center;
`;

const NavLeft = styled.div`
display: block;
float: left;
`;

const HamburgerIcon = styled.div`
font-size: 1.5rem;
margin: .25rem .75rem;
`;

const Logo = styled(Link)`
display: block;
color: #000000;
margin: .75rem;
text-decoration: none;
`;

const NavRight = styled.div`
display: block;
float: right;
vertical-align: center;
margin: .75rem;
`;

function Navbar() {
    const [open, setOpen] = useState(false);

    const toggleSidebar = (event) => {
        let key = `${event.currentTarget.parentNode.id}Open`;
        this.setState({[key]: !this.state[key]});
    };

    // TODO: open 상태에 따른 메뉴의 className 선언

    return (
        <NavigationBar>
            <NavLeft id="open">
                <HamburgerIcon onClick={toggleSidebar}>
                    ≡
                </HamburgerIcon>
                {/* TODO: 메뉴 들어갈 자리 */}
            </NavLeft>
            <NavLeft id="logo">
                <Logo to="/">따미 로고</Logo>
            </NavLeft>
            <NavRight className="user-icon">
                알림
            </NavRight>
            <NavRight className="search-icon">
                <Link to="/search">
                    <img src="https://img.icons8.com/android/24/000000/search.png" alt="search-icon"/>
                </Link>
            </NavRight>
        </NavigationBar>
    );
}

export default Navbar;