import React from "react";
import {Nav, NavLink, NavMenu} from "./NavbarElements";

export default function Navbar() {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/category" activeStyle>
                        Category
                    </NavLink>
                    <NavLink to="/product" activeStyle>
                        Product
                    </NavLink>
                    <NavLink to="/user" activeStyle>
                        User
                    </NavLink>
                    <NavLink to="/address" activeStyle>
                        Address
                    </NavLink>
                    <NavLink to="/review" activeStyle>
                        Review
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};