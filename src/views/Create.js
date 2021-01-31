import React from "react";

import {
    Button,
    Card,
    Form,
    Container,
    Row,
    Col,
    Dropdown
} from "react-bootstrap";

function Create() {

    return (
        <>
            <Container fluid>
                <Row>
                    <Col md="8">
                        <Card>
                            <Card.Header>
                                <Card.Title as="h4">Create</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Row>
                                        {/*<Col className="pr-1" md="5">*/}
                                        {/*    <Form.Group>*/}
                                        {/*        <label>Company (disabled)</label>*/}
                                        {/*        <Form.Control*/}
                                        {/*            defaultValue="Creative Code Inc."*/}
                                        {/*            disabled*/}
                                        {/*            placeholder="Company"*/}
                                        {/*            type="text"*/}
                                        {/*        />*/}
                                        {/*    </Form.Group>*/}
                                        {/*</Col>*/}
                                        <Col className="px-1" md="3">
                                            <Form.Group>
                                                <label className='text-danger'>Username*</label>
                                                <Form.Control
                                                    // defaultValue="------"
                                                    placeholder="Username"
                                                    type="text"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="4">
                                            <Form.Group>
                                                <label className='text-danger'>
                                                    Password*
                                                </label>
                                                <Form.Control
                                                    // defaultValue='******'
                                                    placeholder="password"
                                                    type="text"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col className="pl-1" md="5">
                                            {/*<label className='text-danger'>*/}
                                            {/*    Role**/}
                                            {/*</label>*/}
                                            {/*<Form.Control*/}
                                            {/*    // defaultValue='******'*/}
                                            {/*    placeholder="role"*/}
                                            {/*    type="text"*/}
                                            {/*/>*/}
                                            <Form.Group>
                                                <label className='text-danger'>
                                                    Role*
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

                    {/*---------------------- Optional --------------------------*/}

                    <Col md="4">
                        <Card.Body>
                            <label className='text-success'>
                                <h3>Optional</h3>
                            </label>
                            <Row>
                                <Col className="pr-1" md="6">
                                    <Form.Group>
                                        <label>First Name</label>
                                        <Form.Control
                                            // defaultValue="Mike"
                                            placeholder="Company"
                                            type="text"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col className="pl-1" md="6">
                                    <Form.Group>
                                        <label>Last Name</label>
                                        <Form.Control
                                            // defaultValue="Andrew"
                                            placeholder="Last Name"
                                            type="text"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <Form.Group>
                                        <label>Address</label>
                                        <Form.Control
                                            // defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                                            placeholder="Home Address"
                                            type="text"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="pr-1" md="4">
                                    <Form.Group>
                                        <label>City</label>
                                        <Form.Control
                                            // defaultValue="Mike"
                                            placeholder="City"
                                            type="text"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col className="px-1" md="4">
                                    <Form.Group>
                                        <label>Country</label>
                                        <Form.Control
                                            // defaultValue="Andrew"
                                            placeholder="Country"
                                            type="text"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col className="pl-1" md="4">
                                    <Form.Group>
                                        <label>Postal Code</label>
                                        <Form.Control
                                            placeholder="ZIP Code"
                                            type="number"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="12">
                                    <Form.Group>
                                        <label>About Me</label>
                                        <Form.Control
                                            cols="80"
                                            placeholder="Your description for this user to admin"
                                            rows="4"
                                            as="textarea"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Col>
                    {/*---------------------- Optional End --------------------------*/}
                </Row>
            </Container>
        </>
    );
}

export default Create;