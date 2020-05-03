import React from "react";
import Form from "./Form"

export default class Modal extends React.Component {

  constructor() {
    super();
    // Create ref to allow "close" button to be focused on when modal opens.
    this.button = React.createRef();
  }

  // Focus on close button when modal opens
  componentDidMount() {
    this.button.current.focus();
  }

  render() {
    const { toggleModal } = this.props;
    return (
      // Modal contents: close button, form, modal overlay for background
      <React.Fragment>
        <div className="modal">
          <button ref={this.button} className="close-modal" aria-label="close form" onClick={toggleModal} tabIndex="0">
            &times;
          </button>
          <Form />
        </div>
        <div className="modal-overlay" onClick={toggleModal}></div>
      </React.Fragment>
    );
  }
}