import React from "react";

const ContactCard = (props) => {
  let selectedUser = props.cardUser;
  return (
    <div className="w-100 ms-5 sticky-top">
      <h3>Cantact Card</h3>
      {selectedUser.id && (
        <div className="card shadow-lg">
          <img className="card-img-top" src={selectedUser.url} alt="Profile" />
          <div className="card-body">
            <div className="card-title">
              <label className="fw-bold me-2">Album Id:</label>
              {selectedUser.albumId} <br />
              <label className="fw-bold me-2">User Id:</label>
              {selectedUser.id}
            </div>
            <div className="card-text">
              <label className="fw-bold">Text:</label>
              <td>{selectedUser.title}</td>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ContactCard;
