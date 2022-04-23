import React, { useState } from "react";

const Login = (props) => {
  const [errMsg, setErrmsg] = useState("");
  const [state, setState] = useState({
    user: {
      username: "",
      password: "",
    },
  });

  const updateInput = (event) => {
    setState((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const user = state;

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (user.username === "" || user.username === undefined)
      setErrmsg("Invalid Input!!!");
    if (user.password === "" || user.username === undefined)
      setErrmsg("Invalid Input!!!");
    console.log(user.username, user.password);
  };

  return (
    <React.Fragment>
      <div className="p-3">
        <form onSubmit={formSubmissionHandler}>
          <div className="col-3 mx-auto">
            <div className="d-grid gap-3">
              <div className="row">
                <input
                  className="form-control form-control-sm"
                  name="username"
                  value={user.username}
                  type="text"
                  placeholder="username"
                  onChange={updateInput}
                />
                <span className="text-danger small">{errMsg}</span>
              </div>
              <div className="row">
                <input
                  className="form-control form-control-sm"
                  name="password"
                  value={user.password}
                  type="password"
                  placeholder="password"
                  onChange={updateInput}
                />
                <span className="text-danger small">{errMsg}</span>
              </div>
              <div className="row">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Submit"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;
