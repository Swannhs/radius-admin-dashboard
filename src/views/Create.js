import React from "react";

import {
    Button,
    Card,
    Form,
    Container,
    Row,
    Col
} from "react-bootstrap";


function Create() {

    return (


        <>
            <Container fluid>
                <Row>
                    <Col md="8">
                        <Card>
                            <Card.Header>
                                <Card.Title as="h4">Account</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Row>
                                        <Col className="px-1" md="3">
                                            <Form.Group>
                                                <label>
                                                    Email <span className='text-danger'>*</span>
                                                </label>
                                                <Form.Control
                                                    // defaultValue="------"
                                                    // placeholder="Email"
                                                    type="text"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col className="px-1" md="3">
                                            <Form.Group>
                                                <label>
                                                    Password <span className='text-danger'>*</span>
                                                </label>
                                                <Form.Control
                                                    // defaultValue="------"
                                                    // placeholder="Password"
                                                    type="text"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="4">
                                            <Form.Group>
                                                <label>
                                                    Role<span className='text-danger'>*</span>
                                                </label>
                                                <Form.Group as={Col} controlId="formGridState">
                                                    <Form.Control as="select" defaultValue="Choose...">
                                                        <option>Choose...</option>
                                                        <option>User</option>
                                                        <option>Reseller</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form.Group>

                                        </Col>
                                    </Row>
                                    {/*------------------Optional-----------------*/}

                                    <label className='text-success'>
                                        <h4>Basic Information</h4>
                                    </label>
                                    <Row>
                                        <Col className="pl-1" md="4">
                                            <Form.Group>
                                                <label>First Name</label>
                                                <Form.Control
                                                    // placeholder="First Name"
                                                    type="text"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <Form.Group>
                                                <label>Last Name</label>
                                                <Form.Control
                                                    // placeholder="Last Name"
                                                    type="text"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pl-1" md="4">
                                            <Form.Group>
                                                <label>Address</label>
                                                <Form.Control
                                                    // placeholder="Address"
                                                    type="text"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pl-1" md="4">
                                            <Form.Group>
                                                <label>Country</label>
                                                <Form.Control
                                                    // placeholder="Country"
                                                    type="text"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Button
                                        className="btn-fill pull-right"
                                        type="submit"
                                        variant="info"
                                    >
                                        Submit
                                    </Button>
                                    <div className="clearfix"/>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/*------------------------ End ----------------------------*/}
                </Row>
            </Container>
        </>
    );
}

export default Create;