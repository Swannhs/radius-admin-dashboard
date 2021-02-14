import React, {Component} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import './CreateVoucher.css';
import DataLimit from "./DataLimit";
import TimeLimit from "./TimeLimit";

class CreateVoucher extends Component {

    state = {
        checkboxData: false,
        checkboxTime: false
    }

    render() {
        return (
            <Form>
                <Form.Group controlId="formBasicEmail">
                    {/*<Form.Check type="checkbox" label="Add Multiple" />*/}
                    <Col xs="auto" className="w-25 p-3">
                        <input type='checkbox'/>
                        <span className='p-3'>Add Multiple</span>
                    </Col>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Col xs="auto" className="w-25 p-3">
                        <Form.Label>Owner</Form.Label>
                        <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
                            Preference
                        </Form.Label>
                        <Form.Control
                            as="select"
                            className="mr-sm-2"
                            id="inlineFormCustomSelect"
                            custom
                        >
                            <option value="0">Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Col xs='auto' className='w-25 p-3'>
                        <Form.Label htmlFor="inputPassword5">Name</Form.Label>
                        <Form.Control
                            type="text"
                            id="inputPassword5"
                            className="mr-sm-2"
                            aria-describedby="passwordHelpBlock"
                        />
                        <Form.Text id="passwordHelpBlock" muted>
                            Enter Name
                        </Form.Text>
                    </Col>
                </Form.Group>
                <Form.Group>
                    <Container className='w-100 d-flex'>
                        <Col xs={6}>
                            <h3>Data Limit</h3>
                            <label className="switch">
                                <input type="checkbox"
                                       onChange={event => {
                                           this.setState({
                                               checkboxData: event.target.checked
                                           })
                                       }}
                                />
                                <span className="slider round"/>
                            </label>
                            {this.state.checkboxData ? <DataLimit/> : null}
                        </Col>

                        <Col xs={6}>
                            <h3>Time Limit</h3>
                            <label className="switch">
                                <input type="checkbox"
                                       onChange={event => {
                                           this.setState({
                                               checkboxTime: event.target.checked
                                           })
                                       }}
                                />
                                <span className="slider round"/>
                            </label>
                            {this.state.checkboxTime ? <TimeLimit/> : null}
                        </Col>

                    </Container>
                </Form.Group>

                <Col xs='auto' className='w-25 p-3'>
                    <Button variant="success" type="submit">
                        Generate
                    </Button>
                </Col>
            </Form>
        );
    }
}

export default CreateVoucher;
