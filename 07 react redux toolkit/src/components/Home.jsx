import React from "react";

const Home = (props) => {
  return (
    <React.Fragment>
      <div className="text-center mt-5">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJjl1gAaG-v5oFQj4Xm2pREUcewyMcdCBEEg&usqp=CAU"
          width="500px"
          height="250px"
          alt="React Toolkit"
        />
        <p className="h3 display-5">
          Crash Course <span className="fw-bold">2022</span>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Home;
