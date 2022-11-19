import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                
                <NavMenu>
                </NavMenu>
                <NavBtn>
                    <NavLink to='/home' activeStyle>
                        HOME
                    </NavLink>
                    <NavLink  to='/contact' activeStyle>
                        CONTACT
                    </NavLink>
                    <NavBtnLink to='/'>LOGOUT</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;
