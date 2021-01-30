/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Create from "views/Create.js";
import TableList from "views/TableList.js";
import Notifications from "views/Notifications.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon fas fa-tachometer-alt",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/create",
    name: "Create",
    icon: "nc-icon fas fa-user-plus",
    component: Create,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Table List",
    icon: "nc-icon fas fa-list",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon fas fa-bell",
    component: Notifications,
    layout: "/admin",
  },
];

export default dashboardRoutes;
