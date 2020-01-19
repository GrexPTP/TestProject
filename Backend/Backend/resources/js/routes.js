/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "./views/Dashboard.jsx";
import UserProfile from "./views/UserProfile.jsx";
import TableList from "./views/TableList.jsx";
import Typography from "./views/Typography.jsx";
import Icons from "./views/Icons.jsx";
import Maps from "./views/Maps.jsx";
import Notifications from "./views/Notifications.jsx";
import Upgrade from "./views/Upgrade.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin",
    visible: true
  },
  {
    path: "/profile",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin",
    visible: true
  },
  {
    path: "/users/:id",
    name: "User Detail",
    icon: "pe-7s-users",
    component: UserProfile,
    layout: "/admin",
    visible: false
  },
  {
    path: "/users",
    name: "Users",
    icon: "pe-7s-users",
    component: TableList,
    layout: "/admin",
    visible: true
  },
  {
    path: "/employees/:id",
    name: "Employee Detail",
    icon: "pe-7s-users",
    component: UserProfile,
    layout: "/admin",
    visible: false
  },
  {
    path: "/employees",
    name: "Employees",
    icon: "pe-7s-smile",
    component: TableList,
    layout: "/admin",
    visible: true
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "pe-7s-news-paper",
    component: Typography,
    layout: "/admin",
    visible: true
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "pe-7s-science",
    component: Icons,
    layout: "/admin",
    visible: true
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "pe-7s-map-marker",
    component: Maps,
    layout: "/admin",
    visible: true
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications,
    layout: "/admin",
    visible: true
  }
];

export default dashboardRoutes;
