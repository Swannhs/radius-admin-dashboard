import Dashboard from "views/Dashboard.js";
import CreateUser from "views/User/CreateUser.js";
import VoucherList from "views/Voucher/VoucherList.js";
import UserList from "./views/User/UserList";
import CreateVoucher from "./views/Voucher/CreateVoucher";
import EditUi from "./views/User/Action/components/EditUI";

const dashboardRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: "nc-icon fas fa-tachometer-alt",
        component: Dashboard,
        layout: "/admin",
    },
    {
        path: '/users/view',
        name: 'UserList',
        component: UserList,
        layout: '/admin'
    },
    {
        path: '/users/create',
        name: 'Create User',
        component: CreateUser,
        layout: '/admin'
    },
    {
        path: '/voucher/create',
        name: "Reseller",
        icon: "nc-icon fas fa-user-plus",
        component: CreateVoucher,
        layout: "/admin",
    },
    {
        path: "/voucher/view",
        name: "Voucher",
        icon: "nc-icon fas fa-users",
        component: VoucherList,
        layout: "/admin",
    },
    {
        path: "/users/edit",
        name: "Edit",
        component: EditUi,
        layout: "/admin",
    },

];

export default dashboardRoutes;
