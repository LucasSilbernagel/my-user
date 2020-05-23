import React, { useCallback, useEffect } from 'react'
import Form from "./Form"

export default function Modal(props) {

  const { toggleModal } = props;

  
  
  const escFunction = useCallback((event) => {
    if(event.keyCode === 27) {
      toggleModal();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  return (
    // Modal contents: close button, form, modal overlay for background
    <React.Fragment>
      <div className="modal">
        <button className="close-modal" aria-label="close form" tabIndex="0" onClick={toggleModal}>
          &times;
          </button>
        <Form />
      </div>
      <div className="modal-overlay"></div>
    </React.Fragment>
  );
}