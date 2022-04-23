import React from "react";
import { Route, Routes } from "react-router";
import CounterRedux from "./components/CounterRedux";
import EmployeeListRedux from "./components/EmployeeListRedux";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import UserListRedux from "./components/UserListRedux";

const App = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<CounterRedux />} />
        <Route path="/employees" element={<EmployeeListRedux />} />
        <Route path="/users" element={<UserListRedux />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
