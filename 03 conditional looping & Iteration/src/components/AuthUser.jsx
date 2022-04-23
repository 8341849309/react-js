import React, { useState } from "react";

const AuthUser = (props) => {
  const [state, setState] = useState({
    isLoggedIn: false,
  });

  const handler = (event) => {
    setState((state) => ({
      isLoggedIn: !state.isLoggedIn,
    }));
  };

  const msg = state.isLoggedIn ? "Welcome Venkateswarlu!!!" : "Welcome User!!!";
  const buttonMsg = state.isLoggedIn ? "Logout" : "Login";
  const buttonClass = state.isLoggedIn ? "btn btn-warning" : "btn btn-primary";

  return (
    <React.Fragment>
      <div className="card-body shadow-lg">
        <h4 className="lead">{msg}</h4>

        <button className={buttonClass} onClick={handler}>
          {buttonMsg}
        </button>
      </div>
    </React.Fragment>
  );
};

export default AuthUser;
