import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <React.Fragment>
      <h1>Home Page</h1>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/register">Register</Link>
    </React.Fragment>
  );
};

export default Home;
