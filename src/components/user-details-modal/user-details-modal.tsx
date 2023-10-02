import React from 'react';
import './modal.css';
interface UserDetail {
  id:number,
    name: string;
    email_id: string;
    address: string;
    phone_number: string;
}

interface UserDetailModalProps {
  style?: any;
  closeModal: () => void;
  headingText: string;
  userData: any
}

function UserDetailModal({
  style,
  closeModal,
  headingText,
  userData,
}: UserDetailModalProps) {
  
  return (
    <div className="modal-container" onClick={closeModal}>
      <div className="modal-data" style={style}>
        <div className="modal-header">
          <h3>{headingText}</h3>
          <p onClick={closeModal}>&#x2715;</p>
        </div>
        <div className="modal-content">
          <div className="details-section">
            <div className="name-section">
              <div>
                <b>Name</b>
              </div>
              <div>{userData.name}</div>
              <br />
              <div>
                <b>Email</b>
              </div>
              <div>{userData.email_id}</div>
            </div>
            <div className="address-section">
              <div>
                <b>Address</b>
              </div>
              <div>{userData.address}</div>
              <br/>
              <div>
                <b>Phone number</b>
              </div>
              <div>{userData.phone_number}</div>
            </div>
          </div>
         
        </div>
        <div className="modal-footer">
          <button type="submit" className="primary-btn" onClick={closeModal}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserDetailModal;
