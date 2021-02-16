import React, {useState} from "react";
import 'reactjs-popup/dist/index.css';
import './UserList.css';
import {Link} from "react-router-dom";
import {Button, Dropdown, Input} from "semantic-ui-react";
import UserTableApi from "./UserTableApi";
import {Table} from "react-bootstrap";


function UserList() {

    return (
        <div className="container">
            <div className="row">
                <div className="col align-content-end">
                    <h2>Users</h2>
                </div>
                <div className="ten wide column">
                    <Link className='align-self-end' to='/admin/users/create'>
                        <Button className='ui button primary'>New</Button>
                    </Link>
                </div>

                {/*-------------------Table For User lIst Start -----------------*/}
                <Table className="table-hover table-striped">
                    <thead>
                    <tr className='ct-grid-background border-primary'>
                        <th className="border-0" id='border-0'>
                            User
                            <div className="ui input focus">
                                <input type="text" placeholder="Search..."/>
                            </div>
                        </th>
                        <th className="border-0" id='border-1'>
                            <span>Status</span>
                            <br/>
                            {/*<div className="ui dropdown">*/}
                            {/*    <div className="text">Filter</div>*/}
                            {/*    <i className="dropdown icon"/>*/}
                            {/*    <div className="menu">*/}
                            {/*        <div className="item">Active</div>*/}
                            {/*        <div className="item">Inactive</div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}


                            <Dropdown text='Filter' multiple icon='filter'>
                                <Dropdown.Menu>
                                    <Dropdown.Menu scrolling>
                                        <Dropdown.Item>Active</Dropdown.Item>
                                        <Dropdown.Item>Inactive</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown.Menu>
                            </Dropdown>


                        </th>
                        <th className="border-0">Action</th>
                    </tr>
                    </thead>

                    {/*-------------------- Fetching Api from backend------------------*/}
                    <UserTableApi/> {/*------------------------------------------------*/}
                    {/*----------------------------------------------------------------*/}

                </Table>
                {/*-------------------Table For User lIst End -----------------*/}

            </div>
        </div>



// <Container fluid>
//     <Row>
//         <Col md="12">
//             <Card className="strpied-tabled-with-hover">
//                 <Card.Header>
//                     <Card.Title as="h4">
//                         <Row>
//                             <Col xs={{ order: 'first' }}>Users</Col>
//                             <Col xs={{ order: 'last' }}>
//                                 <Link to='/admin/users/create'>
//                                     <Button className='ui button primary'>New</Button>
//                                 </Link>
//                             </Col>
//                         </Row>
//                     </Card.Title>
//
//                 </Card.Header>
//                 <Card.Body className="table-full-width table-responsive px-0">
//                     <Table className="table-hover table-striped">
//                         <thead>
//                         <tr className='ct-grid-background border-primary'>
//                             <th className="border-0" id='border-0'>
//                                 User
//                                 <input type="search" className="form-control" id="search-input"/>
//                             </th>
//                             <th className="border-0" id='border-1'>
//                                 Status
//                                 <DropdownButton id='dropdown' title="Filter">
//                                     <Dropdown.Item as="button">Active</Dropdown.Item>
//                                     <Dropdown.Item as="button">Inactive</Dropdown.Item>
//                                 </DropdownButton>
//                             </th>
//                             <th className="border-0">Owner</th>
//                         </tr>
//                         </thead>
//                         <UserApi/>
//
//
//                     </Table>
//                 </Card.Body>
//             </Card>
//         </Col>
//     </Row>
//
// </Container>
    )
}

export default UserList;
