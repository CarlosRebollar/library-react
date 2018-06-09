import React from 'react';

// Bootstrap
import { LinkContainer } from 'react-router-bootstrap';
import NavItem from 'react-bootstrap/lib/NavItem';

const navigationItem = (props) => (
    <LinkContainer exact to={props.link}>
        <NavItem eventKey={props.eventKey}>{props.children}</NavItem>
    </LinkContainer>
);

export default navigationItem;