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
                    <NavLink to='/about' activeStyle>
                        About
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavLink to='/home' activeStyle>
                        HOME
                    </NavLink>
                    <NavLink to='/index' activeStyle>
                        CONTACT
                    </NavLink>
                    <NavBtnLink to='/signin'>LOGOUT</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;
