import React, { Component } from 'react'
import MobileNavbar from './MobileNavbar'
import Drawer from './Drawer'
import styled from 'styled-components'

const MyNavbar = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;

    /* 숨어있는 drawer를 숨기게 해주는거야 */
    overflow-x: hidden;
`;

export default class Navbar extends Component {

    state = {
        displayMobileNavbar: false
    }

    toggleDrawerNavbar = () => {
        this.setState(prevState => {
            return { displayMobileNavbar: !prevState.displayMobileNavbar }
        })
    }

    render() {
        return (
            <MyNavbar>
                <MobileNavbar toggleDrawerNavbar = { this.toggleDrawerNavbar } />
                <Drawer displayMobileNavbar = {this.state.displayMobileNavbar} />
            </MyNavbar>
        )
    }
}
