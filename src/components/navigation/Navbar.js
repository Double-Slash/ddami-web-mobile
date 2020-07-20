import React, {useState} from 'react'
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

const Navbar = () => {

    // useState 사용
    // state = {
    //     displayMobileNavbar: false
    // }
    const [open, setOpen] = useState(false)


    // const toggle
    
    // toggleDrawerNavbar = () => {
    //     this.setState(prevState => {
    //         return { displayMobileNavbar: !prevState.displayMobileNavbar }
    //     })
    // }
    //  보류 
    // const toggleDrawerNavbar = setOpen(!open);
    


        return (
            <MyNavbar>
                <MobileNavbar open = {open} setOpen={setOpen}/>
                {open && <Drawer open={open} /> }
            </MyNavbar>
        )
    
}

export default Navbar;
