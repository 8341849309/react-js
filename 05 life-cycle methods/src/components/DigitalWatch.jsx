import React, { useEffect, useState } from "react";

const DigitalWatch = (props) => {
  let initialTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    let interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return (
    <div className="col-md-4 mx-auto">
      <div className="card shadow bg-success">
        <div className="card-body">
          <h3 className="text-white text-center my-auto">{time}</h3>
        </div>
      </div>
    </div>
  );
};

export default DigitalWatch;
