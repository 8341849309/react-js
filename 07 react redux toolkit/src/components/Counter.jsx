import React, { useState } from "react";

const Counter = (props) => {
  const [state, setState] = useState({
    count: 0,
  });

  const increment = () => {
    setState((state) => ({
      count: state.count + 1,
    }));
  };
  const decrement = () => {
    setState((state) => ({
      count: state.count - 1,
    }));
  };
  const incrementBy5 = () => {
    setState((state) => ({
      count: state.count + 5,
    }));
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="card bg-light p-3">
              <div className="card-title">
                <h1 className="text-center">{state.count}</h1>
              </div>
              <div className="card-body">
                <button className="btn btn-primary m-1" onClick={increment}>
                  Increment
                </button>
                <button className="btn btn-warning m-1" onClick={decrement}>
                  Decrement
                </button>
                <button className="btn btn-danger m-1" onClick={incrementBy5}>
                  Increment By 5
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Counter;
