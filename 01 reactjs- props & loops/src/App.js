import React from "react";
import UserList from "./components/UserList";

const App = () => {
  return (
    <React.Fragment>
      <div className="text-center my-2 py-2">
        <UserList />
      </div>
    </React.Fragment>
  );
};

export default App;
