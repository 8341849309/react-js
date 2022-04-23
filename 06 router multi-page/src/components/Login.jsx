import React from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
  return (
    <React.Fragment>
      <h1>Login Page</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/userDetails">UserDetails</Link>
    </React.Fragment>
  );
};

export default Login;
