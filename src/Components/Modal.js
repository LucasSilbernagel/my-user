import React from "react";
import Form from "./Form"

export default class Modal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <React.Fragment>
        <div className="modal">
          <span onClick={this.onClose}>
            &times;
          </span>
          <Form />
        </div>
        <div className="modal-overlay" onClick={this.onClose}></div>
      </React.Fragment>
    );
  }
}
