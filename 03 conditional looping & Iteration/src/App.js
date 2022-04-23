import React from "react";
import AuthUser from "./components/AuthUser";
import Product from "./components/Product";

const App = (props) => {
  return (
    <React.Fragment>
      <div className="container text-center my-2 py-2">
        <h1>Conditional looping</h1>

        <Product />
      </div>
    </React.Fragment>
  );
};

export default App;
