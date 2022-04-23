import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import UserDetails from "./components/UserDetails";
import PageNotFound from "./components/PageNotFound";

const App = (props) => {
  return (
    <React.Fragment>
      <div className="container my-3">
        <h3 className="text-center mb-5">React JS React Router</h3>
        <BrowserRouter>
          <Routes>
            <Route exact={true} path={"/"} element={<Home />} />
            <Route exact={true} path={"/login"} element={<Login />} />
            <Route exact={true} path={"/register"} element={<Register />} />
            <Route
              exact={true}
              path={"/userDetails"}
              element={<UserDetails />}
            />
            <Route path={"*"} element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
};

export default App;
