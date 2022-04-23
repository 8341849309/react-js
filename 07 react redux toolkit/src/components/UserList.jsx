import React, { useEffect, useState } from "react";
import UserListService from "../services/UserListService";

const UserList = (props) => {
  const [state, setState] = useState({
    users: [],
    isLoading: false,
    errorMessage: "",
  });

  const { users, isLoading, errorMessage } = state;

  useEffect(async () => {
    setState((state) => ({
      ...state,
      isLoading: true,
    }));
    await UserListService.getAllUsers()
      .then((res) => {
        setState((state) => ({
          ...state,
          isLoading: false,
          errorMessage: "",
          users: res.data,
        }));
      })
      .catch((error) => {
        console.log(error);
        setState((state) => ({
          ...state,
          isLoading: false,
          errorMessage: "Something went wrong!!!",
        }));
      });
  }, []);

  const msg = isLoading;

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <h3 className="text-warning mt-3">Users</h3>
          <p>
            The .navbar-brand can be applied to most elements, but an anchor
            works best, as some elements might require utility classes or custom
            styles.The .navbar-brand can be applied to most elements, but an
            anchor works best, as some elements might require utility classes or
            custom styles.
          </p>
        </div>
        <div className="row">
          {isLoading && (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          {errorMessage && (
            <span className="text-danger text-center h3">{errorMessage}</span>
          )}
          {errorMessage.length < 1 && !isLoading && (
            <table className="table">
              <thead>
                <tr>
                  <th>SNO</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>CITY</th>
                  <th>COMPANY</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.address.city}</td>
                      <td>{user.company.name}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserList;
