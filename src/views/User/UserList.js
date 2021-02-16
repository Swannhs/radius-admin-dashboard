import React, {useState} from "react";
import 'reactjs-popup/dist/index.css';
import './UserList.css';
import {Link} from "react-router-dom";
import {Button} from "semantic-ui-react";
import UserTableApi from "./UserTableApi";


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
                <table className="ui celled table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Owner</th>
                    </tr>
                    </thead>
                    <tbody>

                    {/*-------------------- Fetching Api from backend------------------*/}
                    <UserTableApi/> {/*------------------------------------------------*/}
                    {/*----------------------------------------------------------------*/}

                    </tbody>
                </table>
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
