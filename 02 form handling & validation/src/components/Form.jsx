import React, { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [locality, setLocality] = useState("");
  const [termsAndConds, setTermsAndConds] = useState("");

  const updateInputName = (event) => {
    setName(event.target.value);
  };
  const updateInputEmail = (event) => {
    setEmail(event.target.value);
  };
  const updateInputDateOfBirth = (event) => {
    setDob(event.target.value);
  };
  const updateInputGender = (event) => {
    setGender(event.target.value);
  };
  const updateInputLocality = (event) => {
    setLocality(event.target.value);
  };
  const updateInputTermsAndConds = (event) => {
    setTermsAndConds(event.target.checked);
  };
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    console.log(name, email, dob, gender, locality, termsAndConds);
  };

  return (
    <React.Fragment>
      <div className="p-3">
        <form onSubmit={formSubmissionHandler}>
          <div className="col-6 mx-auto">
            <div className="d-grid gap-3">
              <div className="row">
                <input
                  className="form-control form-control-sm"
                  name="name"
                  value={name}
                  type="text"
                  placeholder="Full Name"
                  onChange={updateInputName}
                />
              </div>
              <div className="row">
                <input
                  className="form-control form-control-sm"
                  name="email"
                  value={email}
                  type="email"
                  placeholder="Email"
                  onChange={updateInputEmail}
                />
              </div>
              <div className="row">
                <input
                  className="form-control form-control-sm"
                  name="dob"
                  value={dob}
                  type="date"
                  placeholder="Date of birth"
                  onChange={updateInputDateOfBirth}
                />
              </div>
              <div className="row">
                <select
                  className="form-control form-control-sm"
                  onChange={updateInputGender}
                  value={gender}
                >
                  <option value="select">--select--</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Trans-gender">Trans-gender</option>
                </select>
              </div>
              <div className="row">
                <div
                  className="d-flex d-grid gap-2"
                  onChange={updateInputLocality}
                >
                  <input name="locality" type="radio" value="indian" />
                  <label>indian</label>
                  <input name="locality" type="radio" value="Foreigner" />
                  <label>Foreigner</label>
                </div>
              </div>
              <div className="row">
                <div className="d-flex d-grid gap-2">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                    onChange={updateInputTermsAndConds}
                  />
                  <label>I agree terms and conditions</label>
                </div>
              </div>
              <div className="row">
                <input
                  className="btn btn-primary"
                  value="Submit"
                  type="submit"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Form;
