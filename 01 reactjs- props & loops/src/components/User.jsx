import React from "react";

const User = (props) => {
  let user = props.user;

  return (
    <React.Fragment>
      <div className="col-md-4 text-start ">
        <div className="card bg-light m-3">
          <div className="card-body">
            <div className="card-title text-primary">
              <h4>{user.name}</h4>
            </div>
            <div className="card-body">
              <div className="card-content">
                <pre>
                  Email: <p>{user.email}</p>
                  Address: <p>{user.address.street}</p>
                  City: <p>{user.address.city}</p>
                  phone: <p>{user.phone}</p>
                  company: <p>{user.company.name}</p>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default User;
