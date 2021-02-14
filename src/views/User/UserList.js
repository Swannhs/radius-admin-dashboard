import React, {useState} from "react";
import {
    Card,
    Table,
    Container,
    Row,
    Col, Dropdown, DropdownButton
} from "react-bootstrap";
import 'reactjs-popup/dist/index.css';
import UserApi from "./UserApi";
import './UserList.css';
import DropdownItem from "react-bootstrap/DropdownItem";


function UserList() {

    return (
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
                                <tr className='ct-grid-background border-primary'>
                                    <th className="border-0" id='border-0'>
                                        User
                                        <input type="search" className="form-control" id="search-input"/>
                                    </th>
                                    <th className="border-0" id='border-1'>
                                        Status
                                        <DropdownButton id='dropdown' title="Filter">
                                            <Dropdown.Item as="button">Active</Dropdown.Item>
                                            <Dropdown.Item as="button">Inactive</Dropdown.Item>
                                        </DropdownButton>
                                    </th>
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
    )
}

export default UserList;
