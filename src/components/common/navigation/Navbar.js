import React, {useState} from 'react'
import MobileNavbar from './MobileNavbar'
import Drawer from './Drawer'
import styled from 'styled-components'

const MyNavbar = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    overflow-x: hidden;
`;

const Navbar = () => {
    const [open, setOpen] = useState(false)
      return (
        <MyNavbar>
          <MobileNavbar open = {open} setOpen={setOpen}/>
          {open && <Drawer open={open} /> }
        </MyNavbar>
      )
    
}

export default Navbar;
