import React from 'react';

import Jumbotron from 'react-bootstrap/lib/Jumbotron';

import bookImage from '../../../images/Books.jpeg';
import bookImage2 from '../../../images/Books2.jpg';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

const home = (props) => {
    const imgStyle = {
        width: '100%',
        textAlign: 'center'
    }
    return (
        <div>
        <Jumbotron>
            <h2>Welcome to Rebo's Library</h2>
            <p>
                Here you can check for the newest books and older books. You can look for your
                dramas, comics, novels, poetry, action, fantasy, etc... The idea of this Library
                is that you can see different books that are and a little description so you can
                decide which book to start reading.
            </p>
        </Jumbotron>
        <Row>
            <Col sm={12} md={5} mdOffset={1}>
                <img style={imgStyle} src={bookImage} alt='Books for reading' />
            </Col>
            <Col sm={12} md={5}>
                <img style={imgStyle} src={bookImage2} alt='Books for reading' />
            </Col>
        </Row>
        
    </div>
    )
};

export default home;