import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
          School Management
        </div>
      </a>

      <div className="sidebar-heading">Interface</div>

      <li className="nav-item">
        <Link
          className="nav-link collapsed"
          to={"/portal/teachers"}
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-cog"></i>
          <span>Teachers</span>
        </Link>
      
      </li>
      
      <li className="nav-item">
        <Link
          className="nav-link collapsed"
          to={"/portal/students"}
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-cog"></i>
          <span>Students</span>
        </Link>
      
      </li>
 
    </ul>
  );
}

export default Sidebar;