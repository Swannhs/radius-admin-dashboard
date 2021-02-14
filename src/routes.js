import Dashboard from "views/Dashboard.js";
import CreateUser from "views/User/CreateUser.js";
import VoucherList from "views/Voucher/VoucherList.js";
import UserList from "./views/User/UserList";
import CreateVoucher from "./views/Voucher/CreateVoucher";

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
    },
    {
        path: '/create/users',
        name: 'Create User',
        component: CreateUser,
        layout: '/admin'
    },
    {
        path: '/create/voucher',
        name: "Reseller",
        icon: "nc-icon fas fa-user-plus",
        component: CreateVoucher,
        layout: "/admin",
    },
    {
        path: "/view/voucher",
        name: "Voucher",
        icon: "nc-icon fas fa-users",
        component: VoucherList,
        layout: "/admin",
    }
];

export default dashboardRoutes;
