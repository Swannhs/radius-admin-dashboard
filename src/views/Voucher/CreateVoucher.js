import React, {Component} from 'react';
import {Button, Col, Form} from "react-bootstrap";
import './CreateVoucher.css';

class CreateVoucher extends Component {
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
                    <Col xs='auto' className='w-50 p-3'>
                        <Form.Label htmlFor="inputPassword5">Name</Form.Label>
                        <Form.Control
                            type="text"
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"
                        />
                        <Form.Text id="passwordHelpBlock" muted>
                            Enter Name
                        </Form.Text>
                    </Col>
                </Form.Group>
                <Form.Group>
                    <Col xs='auto' className='w-25 p-3'>
                        <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider round"/>
                        </label>
                    </Col>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}

export default CreateVoucher;
