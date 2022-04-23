import React from "react";

const ContactList = (props) => {
  let users = props.users.state.users;

  const clickUser = (user) => {
    props.onSelectedUser(user);
  };

  return (
    <div>
      <h1>Cantact List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Album Id</th>
            <th>Photo Id</th>
            <th>Title</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          {users.map(
            (user, index) =>
              index < 15 && (
                <tr key={index} onClick={() => clickUser(user)}>
                  <td>{user.albumId}</td>
                  <td>{user.id}</td>
                  <td>{user.title}</td>
                  <td>
                    <img src={user.thumbnailUrl} alt="Profile" />
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
};
export default ContactList;
