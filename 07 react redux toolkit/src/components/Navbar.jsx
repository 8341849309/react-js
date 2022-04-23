import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <Link to={"/"} className="navbar-brand">
            Redux Toolkit
          </Link>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"/employees"} className="nav-link active">
                  Employees
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/counter"} className="nav-link active">
                  Counter
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link to={"/users"} className="nav-link active">
                  Users
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
