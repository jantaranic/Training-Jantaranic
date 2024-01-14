import React from "react";
import { NavLink } from "react-router-dom";
const Layout = ({ children }) => (
  <div>
    <nav className="navbar">
      <div className="navbar-inside">
        <span className="brand">
          <NavLink to="/">NVC Training Center</NavLink>
        </span>
        <ul className="navbar-nav">
          <li>
            <NavLink to="/">หน้าหลัก</NavLink>
          </li>
          <li>
            <NavLink to="/course">หลักสูตรที่เปิดสอน</NavLink>
          </li>
          <li>
            <NavLink to="/contact">ติดต่อ</NavLink>
          </li>
        </ul>
      </div>
    </nav>

    <main>{children}</main>
    <footer>
      <p>&copy;จันทรนิก สุวรรณเกิด 66402040906</p>
    </footer>
  </div>
);

export default Layout;