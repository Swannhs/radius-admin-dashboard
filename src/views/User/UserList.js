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

    return (
        <>
            <Container fluid>
                <Row>
                    <Col md="12">
                        <Card className="strpied-tabled-with-hover">
                            <Card.Header>
                                <Card.Title as="h4">Users</Card.Title>
                            </Card.Header>
                            <Card.Body className="table-full-width table-responsive px-0">
                                <Table className="table-hover table-striped">
                                    <thead>
                                    <tr className='ct-grid-background'>
                                        <th className="border-0">User</th>
                                        <th className="border-0">Status</th>
                                        <th className="border-0">Owner</th>
                                    </tr>
                                    </thead>
                                    <UserApi/>


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
