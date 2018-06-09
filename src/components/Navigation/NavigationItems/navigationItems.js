import React from 'react';

// Bootstrap
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';

import NavigationItem from './NavigationItem/nativationItem';

const navigationItems = (props) => {
    const navItems = props.navItems.map( (item, index) => {
        return (
            <NavigationItem eventKey={item.index} link={item.link} key={item.text}>{item.text}</NavigationItem>
        )
    });

    return (
        <Navbar inverse>
            <Nav>
                {navItems}
            </Nav>
        </Navbar>
    );
}

export default navigationItems;