import React, { useCallback, useEffect, useRef } from 'react'
import Form from "./Form"

export default function Modal(props) {

  const { toggleModal } = props;

  // Create ref to target "close" button when modal opens
  const refContainer = useRef(null);
  
  // Function to close modal when esc button is pressed
  const escFunction = useCallback((event) => {
    if(event.keyCode === 27) {
      toggleModal();
    }
  }, []);

  useEffect(() => {

    // Event listener for esc button press
    document.addEventListener("keydown", escFunction, false);

    // Focus on button when modal opens
    refContainer.current.focus();

    return () => {
      // Remove event listener for esc button press after modal closes
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  return (
    // Modal contents: close button, form, modal overlay for background
    <React.Fragment>
      <div className="modal">
        <button ref={refContainer} className="close-modal" aria-label="close form" tabIndex="0" onClick={toggleModal}>
          &times;
          </button>
        <Form />
      </div>
      <div className="modal-overlay" onClick={toggleModal}></div>
    </React.Fragment>
  );
}