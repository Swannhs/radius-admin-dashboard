import Dashboard from "views/Dashboard.js";
import CreateUser from "views/User/CreateUser.js";
import VoucherList from "views/Voucher/VoucherList.js";
import UserList from "./views/User/UserList";
// import Notifications from "views/Notifications.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon fas fa-tachometer-alt",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: '/view/users',
    name: 'UserList',
    component: UserList,
    layout: '/admin'
  },{
    path: '/create/users',
    name: 'Create User',
    component: CreateUser,
    layout: '/admin'
  },
  {
    path: '/create/voucher',
    name: "Reseller",
    icon: "nc-icon fas fa-user-plus",
    component: CreateUser,
    layout: "/admin",
  },
  {
    path: "/view/voucher",
    name: "Voucher",
    icon: "nc-icon fas fa-users",
    component: VoucherList,
    layout: "/admin",
  },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon fas fa-bell",
  //   component: Notifications,
  //   layout: "/admin",
  // },
];

export default dashboardRoutes;
