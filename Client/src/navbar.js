import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="wrapper-Budget">
        <div className="container-BudgetPlanner">
          <h2>Budget Planner</h2>
          <ul>
            <li>
              <a href="#">&#9776;</a>
              <ul className="dropdown" aria-label="submenu">
                <li>
                  <a href="#">
                    <Link to={{ pathname: "/Dashboard" }}>Dashboard</Link>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Link to={{ pathname: "/" }}>Logout</Link>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
