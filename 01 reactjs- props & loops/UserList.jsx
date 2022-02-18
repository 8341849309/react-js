import React, { useEffect, useState } from "react";

import UserService from "../services/UserService";
import User from "./User";

const UserList = (props) => {
  const [users, usersSet] = useState("");

  useEffect(() => {
    UserService.getAllFriends()
      .then((res) => {
        usersSet(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let usersContent = <p>No users found.</p>;

  if (users.length > 0) {
    usersContent = users.map((user) => <User key={user.id} user={user} />);
  }
  return (
    <React.Fragment>
      <div className="container">
        <div className="grid">
          <div className="row">{usersContent}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserList;
