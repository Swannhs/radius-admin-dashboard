import React from "react";
import {useLocation, NavLink, Link} from "react-router-dom";

import {ProSidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {AiFillDashboard, AiOutlineUser, BsListNested} from "react-icons/all";
import {Dropdown, Nav, NavItem} from "react-bootstrap";
import {Navigation} from "react-minimal-side-navigation";


function Sidebar() {
    // const location = useLocation();
    // const activeRoute = (routeName) => {
    //     return location.pathname.indexOf(routeName) > -1 ? "active" : "";
    // };
    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <div className="logo d-flex align-items-center justify-content-start">
                    <Link
                        to="/"
                        className="simple-text logo-mini mx-1"
                    >
                        {/*-------------------------------- Logo -------------------------*/}
                        {/*<div className="logo-img">*/}
                        {/*    <img*/}
                        {/*        src={require("assets/img/new_logo.png").default}*/}
                        {/*        alt="..."*/}
                        {/*    />*/}
                        {/*</div>*/}
                    </Link>
                    <Link className="simple-text" to='/'>
                        Radius Admin
                    </Link>
                </div>
                <Nav>
                    {/*{routes.map((prop, key) => {*/}
                    {/*    if (!prop.redirect)*/}
                    {/*        return (*/}
                    {/*            <li*/}
                    {/*                className={*/}
                    {/*                    prop.upgrade*/}
                    {/*                        ? "active active-pro"*/}
                    {/*                        : activeRoute(prop.layout + prop.path)*/}
                    {/*                }*/}
                    {/*                key={key}*/}
                    {/*            >*/}
                    {/*                <NavLink*/}
                    {/*                    to={prop.layout + prop.path}*/}
                    {/*                    className="nav-link"*/}
                    {/*                    activeClassName="active"*/}
                    {/*                >*/}
                    {/*                    <i className={prop.icon}/>*/}
                    {/*                    <p>{prop.name}</p>*/}
                    {/*                </NavLink>*/}
                    {/*            </li>*/}
                    {/*        );*/}
                    {/*    return null;*/}
                    {/*})}*/}

                    <li>
                        <ProSidebar>
                            <Menu iconShape="square">
                                <MenuItem icon={<AiFillDashboard/>}>
                                    <Link to='/admin/dashboard'>
                                        Dashboard
                                    </Link>
                                </MenuItem>
                                <SubMenu title="User" icon={<AiOutlineUser/>}>
                                    <MenuItem>
                                        <Link to='/admin/view/users'>
                                            View Users
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to='/admin/create/users'>
                                            Create Users
                                        </Link>
                                    </MenuItem>
                                </SubMenu>
                                <SubMenu title="Voucher" icon={<BsListNested/>}>
                                    <MenuItem>
                                        <Link to='/admin/view/voucher'>
                                            View vouchers
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link to='/admin/create/voucher'>
                                            Create voucher
                                        </Link>
                                    </MenuItem>
                                </SubMenu>
                            </Menu>
                        </ProSidebar>
                    </li>


                </Nav>
            </div>
        </div>
    );
}

export default Sidebar;


