import React, {useState} from "react";
import {
    Card,
    Table,
    Container,
    Row,
    Col, Button, Modal, Form
} from "react-bootstrap";
import 'reactjs-popup/dist/index.css';
import UserApi from "./UserApi";


function UserList() {
    const [lgShow, setLgShow] = useState(false);

    return (
        <>
            <Container fluid>
                <Row>
                    <Col md="12">
                        <Card className="strpied-tabled-with-hover">
                            <Card.Header>
                                <Card.Title as="h4">Voucher</Card.Title>
                            </Card.Header>
                            <Card.Body className="table-full-width table-responsive px-0">
                                <Table className="table-hover table-striped">
                                    <thead>
                                    <tr className='ct-grid-background'>
                                        <th className="border-0">Index</th>
                                        <th className="border-0">User</th>
                                        <th className="border-0">Password</th>
                                        <th className="border-0">Status</th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    {/*<tr onClick={() => setLgShow(true)}>*/}
                                    {/*    <td>1</td>*/}
                                    {/*    <td>Asik</td>*/}
                                    {/*    <td>24455</td>*/}
                                    {/*    <td>Monthly</td>*/}
                                    {/*    <td>Active</td>*/}
                                    {/*</tr>*/}
                                    <UserApi/>

                                    </tbody>

                                    <Row className="justify-content-md-center">
                                        <Col md="auto">
                                            <Modal
                                                size="lg"
                                                show={lgShow}
                                                onHide={() => setLgShow(false)}
                                                aria-labelledby="modal-sizes-title-sm"
                                            >
                                                <Modal.Body>
                                                    <Form>
                                                        <Form.Row>
                                                            <Form.Group as={Col}>
                                                                <Form.Label>User Name</Form.Label>
                                                                <Form.Control type="text"/>
                                                            </Form.Group>

                                                            <Form.Group as={Col}>
                                                                <Form.Label>Password</Form.Label>
                                                                <Form.Control type="text"/>
                                                            </Form.Group>
                                                        </Form.Row>


                                                        <Form.Row>
                                                            <Form.Group as={Col}>
                                                                <Form.Label>Status</Form.Label>
                                                                <Form.Control as="select" defaultValue="Choose...">
                                                                    <option>Choose...</option>
                                                                    <option>Active</option>
                                                                    <option>Inactive</option>
                                                                </Form.Control>
                                                            </Form.Group>
                                                            <Form.Group as={Col}>
                                                                <Form.Label>State</Form.Label>
                                                                <Form.Control as="select" defaultValue="Choose...">
                                                                    <option>Choose...</option>
                                                                    <option>...</option>
                                                                </Form.Control>
                                                            </Form.Group>
                                                        </Form.Row>
                                                    </Form>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button className='btn btn-success btn-sm mr-3'
                                                            onClick={() => setLgShow(false)}>Update</Button>
                                                    <Button className='btn btn-danger btn-sm mr-3'
                                                            onClick={() => setLgShow(false)}>Delete</Button>
                                                    <Button className='btn btn-primary btn-sm mr-3'
                                                            onClick={() => setLgShow(false)}>Close</Button>

                                                </Modal.Footer>
                                            </Modal>
                                        </Col>
                                    </Row>

                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default UserList;
