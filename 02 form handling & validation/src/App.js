import React from "react";

import Form from "./components/Form";
import Login from "./components/Login";

const App = () => {
  return (
    <React.Fragment>
      <div className="container text-center my-2 py-2">
        {/* <Form /> */}
        <Login />
      </div>
    </React.Fragment>
  );
};

export default App;
