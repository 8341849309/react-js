import React from "react";
import { Link } from "react-router-dom";

const UserDetails = (props) => {
  return (
    <React.Fragment>
      <h1>UserDetails Page</h1>
      <Link to="/">Home</Link>
    </React.Fragment>
  );
};

export default UserDetails;
