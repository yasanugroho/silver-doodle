import React from 'react';

const Modal = ({ showModal, children }) => {
  const modalStyle = {
    display: showModal ? 'flex' : 'none',
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    zIndex: 999999,
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={modalStyle}>
      <div style={modalBox}>{children}</div>
    </div>
  );
};

const modalBox = {
  maxWidth: '500px',
  width: '90%',
  height: '500px',
  borderRadius: '30px',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 999999,
};

Modal.defaultProps = {
  showModal: false,
};

export default Modal;
