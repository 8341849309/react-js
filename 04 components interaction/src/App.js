import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import ContactCard from "./Components/ContactCard";
import ContactList from "./Components/ContactList";
import ContactService from "./Services/ContactService";

const App = (props) => {
  let [state, setState] = useState({
    users: [],
    selectedUser: [],
  });

  useEffect(() => {
    ContactService.getAllContactList()
      .then((response) => {
        setState((state) => ({
          ...state,
          users: response.data,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let users = { state };

  const selectedUser = (user) => {
    setState((state) => ({
      ...state,
      selectedUser: user,
    }));
  };

  return (
    <React.Fragment>
      <div className="container my-3">
        <h3 className="text-center mb-5">Components Interaction</h3>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9 overflow-auto">
              <ContactList users={users} onSelectedUser={selectedUser} />
            </div>
            <div className="col-md-3">
              <ContactCard cardUser={state.selectedUser} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
