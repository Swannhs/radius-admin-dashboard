import React from "react";
import {Link, useLocation} from "react-router-dom";
import {Navbar, Container, Nav, Dropdown, Button} from "react-bootstrap";

import routes from "routes.js";
import Cookies from "universal-cookie/lib";

function Header() {
    const location = useLocation();


    const onLogout = () => {
        const cookie = new Cookies;
        // cookie.set('Token',null)
        cookie.remove('Token', null);
    }



    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
                    <span className="navbar-toggler-bar burger-lines"/>
                    <span className="navbar-toggler-bar burger-lines"/>
                    <span className="navbar-toggler-bar burger-lines"/>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav mr-auto" navbar>
                        <Nav.Item>
                            <Nav.Link
                                data-toggle="dropdown"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                                className="m-0"
                            >
                                <i className="nc-icon nc-palette"/>
                                <span className="d-lg-none ml-1">Dashboard</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Dropdown as={Nav.Item}>
                            <Dropdown.Toggle
                                as={Nav.Link}
                                data-toggle="dropdown"
                                id="dropdown-67443507"
                                variant="default"
                                className="m-0"
                            >
                                <i className="nc-icon nc-planet"/>
                                <span className="notification">5</span>
                                <span className="d-lg-none ml-1">Notification</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Notification 1
                                </Dropdown.Item>
                                <Dropdown.Item
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Notification 2
                                </Dropdown.Item>
                                <Dropdown.Item
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Notification 3
                                </Dropdown.Item>
                                <Dropdown.Item
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Notification 4
                                </Dropdown.Item>
                                <Dropdown.Item
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Another notification
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Item>
                            <Nav.Link
                                className="m-0"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                            >
                                <i className="nc-icon nc-zoom-split"/>
                                <span className="d-lg-block"> Search</span>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <Nav.Item>
                            <Nav.Link
                                className="m-0"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                            >
                                <span className="no-icon">Account</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                className="m-0"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                            >
                                <Link to='/login'>
                                    <span className="no-icon text-danger" onClick={onLogout}>Log out</span>
                                </Link>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
