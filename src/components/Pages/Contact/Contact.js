import React, { Component } from 'react';

// Bootstrap
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Panel from 'react-bootstrap/lib/Panel';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';

import Jumbotron from 'react-bootstrap/lib/Jumbotron';

class Contact extends Component {
    state = {
        contactForm: {
            name: {
                value: '',
                id: 1
            },
            email: {
                value: '',
                id: 2
            },
            phone: {
                value: '',
                id: 3
            },
            subject: {
                value: '',
                id: 4
            },
            msg: {
                value: '',
                id: 5
            },
        }
    }

    valueChangeHandler = (id, event) => {
        for (let key in this.state.contactForm) {
            if (this.state.contactForm[key].id === id) {
                const newValue = {
                    ...this.state.contactForm
                }
                newValue[key].value = event.target.value;
                this.setState({ contactForm: newValue });
            }
        }
    }

    sendDataHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (let key in this.state.contactForm) {
            formData[key] = this.state.contactForm[key].value;
        }
        alert(`Your message has been sent. We are looking forward to read your message. Thanks ${formData.name}`);
    }

    render() {
        return (
            <div>
                <Jumbotron>
                    <h3>Contact us! :D</h3>
                    <p>
                        Email us so we can add your favorite book or some other book that you think would deserve to
                        be here. Evrey book here is welcome.
                    </p>
                </Jumbotron>
                <Row>
                    <Col sm={8} smOffset={2}>
                        <Panel bsStyle="info">
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">Contact Form</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <form onSubmit={this.sendDataHandler}>
                                    <FormGroup controlId='nameInput'>
                                        <ControlLabel>Name:</ControlLabel>
                                        <FormControl type='text'
                                                    value={this.state.contactForm.name.value}
                                                    onChange={(event) => this.valueChangeHandler(this.state.contactForm.name.id, event)}
                                                    placeholder='Your name'/>
                                    </FormGroup>
                                    <FormGroup controlId='emailInput'>
                                        <ControlLabel>Email:</ControlLabel>
                                        <FormControl type='text'
                                                    value={this.state.contactForm.email.value}
                                                    onChange={(event) => this.valueChangeHandler(this.state.contactForm.email.id, event)}
                                                    placeholder='Your e-mail'/>
                                    </FormGroup>
                                    <FormGroup controlId='phoneInput'>
                                        <ControlLabel>Phone:</ControlLabel>
                                        <FormControl type='text'
                                                    value={this.state.contactForm.phone.value}
                                                    onChange={(event) => this.valueChangeHandler(this.state.contactForm.phone.id, event)}
                                                    placeholder='Your phone'/>
                                    </FormGroup>
                                    <FormGroup controlId='subjectInput'>
                                        <ControlLabel>Subject: </ControlLabel>
                                        <FormControl type='text'
                                                    value={this.state.contactForm.subject.value}
                                                    onChange={(event) => this.valueChangeHandler(this.state.contactForm.subject.id, event)}
                                                    placeholder='Subject here...'/>
                                    </FormGroup>
                                    <FormGroup controlId='msgInput'>
                                        <ControlLabel>Message:</ControlLabel>
                                        <FormControl componentClass="textarea" 
                                                    value={this.state.contactForm.msg.value}
                                                    onChange={(event) => this.valueChangeHandler(this.state.contactForm.msg.id, event)}
                                                    placeholder="Message for us" />
                                    </FormGroup>
                                    <Button bsClass='btn btn-primary' type='submit'>Submit</Button>
                                </form>
                            </Panel.Body>
                        </Panel>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Contact;