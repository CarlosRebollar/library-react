import React from 'react';

// Bootstrap
import Panel from 'react-bootstrap/lib/Panel';
import Col from 'react-bootstrap/lib/Col';

const bookContainer = (props) => {
    const imgStyle = {
        width: '40%',
        marginLeft: '30%',
        marginBottom: '10px'
    }
    return (
        <Col sm={12} md={4}>
            <Panel bsStyle='primary'>
            <Panel.Heading>
                <Panel.Title componentClass="h3">{props.title}</Panel.Title>
                <p>Author: {props.author}</p>
            </Panel.Heading>
            <Panel.Body>
                <img style={imgStyle} src={props.image} alt='LOTR Fellowship of the Ring'/>
                <p>
                    {props.description}
                </p>
            </Panel.Body>
            <Panel.Footer>Genre: {props.genre}</Panel.Footer>
        </Panel>
        </Col>
    );
}

export default bookContainer;