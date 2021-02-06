import Dashboard from "views/Dashboard.js";
import Create from "views/Create.js";
import UserList from "views/Users/UserList.js";
import Notifications from "views/Notifications.js";
import UserApi from "./views/Users/UserApi";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon fas fa-tachometer-alt",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: '/create',
    name: "Reseller",
    icon: "nc-icon fas fa-user-plus",
    component: Create,
    layout: "/admin",
  },
  {
    path: "/users",
    name: "User List",
    icon: "nc-icon fas fa-users",
    component: UserList,
    // component: UserApi,
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
