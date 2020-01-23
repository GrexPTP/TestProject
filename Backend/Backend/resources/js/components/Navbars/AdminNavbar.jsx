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
import React, { useState } from "react";
import { Navbar } from "react-bootstrap";

import AdminNavbarLinks from "./AdminNavbarLinks.jsx";
const Header = (props) => {
  const [sidebarExists, setSidebarExists] = useState(false)
  
  const mobileSidebarToggle = e => {
    if (sidebarExists === false) {
      setSidebarExists(true)
    }
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    let node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function() {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  }
  
    return (
      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">{props.brandText}</a>
          </Navbar.Brand>
          <Navbar.Toggle onClick={mobileSidebarToggle} />
        </Navbar.Header>
        <Navbar.Collapse>
          <AdminNavbarLinks />
        </Navbar.Collapse>
      </Navbar>
    );
}

export default Header;
