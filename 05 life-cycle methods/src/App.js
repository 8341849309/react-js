import React from "react";
import DigitalWatch from "./components/DigitalWatch";

const App = (props) => {
  return (
    <React.Fragment>
      <div className="container my-3">
        <h3 className="text-center mb-5">React JS Life Cycle Methods</h3>
        <DigitalWatch />
      </div>
    </React.Fragment>
  );
};

export default App;
