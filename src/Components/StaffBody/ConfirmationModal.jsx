import React from 'react';

const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onConfirm}>Xác nhận</button>
        <button onClick={onCancel}>Hủy</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
