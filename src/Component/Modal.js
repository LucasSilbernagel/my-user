import React from "react";

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
          <button class="toggle-button" onClick={this.onClose}>
            Save
          </button>
          <button class="toggle-button" onClick={this.onClose}>
            Cancel
          </button>
        </div>
        <div className="modal-overlay"></div>
      </React.Fragment>
    );
  }
}
