import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementBy,
} from "../redux/features/counterfeature";

const CounterRedux = (props) => {
  // Get data from Redux Store
  let counterState = useSelector((state) => {
    return state["counter"];
  });

  let dispatch = useDispatch();

  let { count } = counterState;

  return (
    <React.Fragment>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="card bg-light p-3">
              <div className="card-title">
                <h1 className="text-center">{count}</h1>
              </div>
              <div className="card-body">
                <button
                  className="btn btn-primary m-1"
                  onClick={() => {
                    dispatch(increment());
                  }}
                >
                  Increment
                </button>
                <button
                  className="btn btn-warning m-1"
                  onClick={() => {
                    dispatch(decrement());
                  }}
                >
                  Decrement
                </button>
                <button
                  className="btn btn-danger m-1"
                  onClick={() => {
                    dispatch(incrementBy(5));
                  }}
                >
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

export default CounterRedux;
