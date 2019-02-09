import React, { Component } from 'react';

import './Modal.css';

// Use with DelayedComponent when need to animate on Unmount
//
// Example: 
//     <DelayedComponent
//       delayUnmountTime={500}                   : int
//       isMount={this.state.mountSomeComponent}  : bool !
//      >
//        <Modal
//          isOpen={this.state.mountSomeComponent} : bool !
//          closeModal={this.unmountSomeComponent} : func !
//        >
//          <SomeComponent />
//        </Modal>
//      </DelayedComponent>

class Modal extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown, false);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.closeModal();
    }
  }

  handleCloseModal = (e) => {
    if (e.target.className !== "modal__background") {
      return;
    }
    this.props.closeModal();
  }

  render() {
    const activeClass = this.props.isOpen
      ? 'modal__container open'
      : 'modal__container open out';

    return (
      <div
        className={activeClass}
        style={this.props.zIndex ? { zIndex: this.props.zIndex } : null}
        onClick={this.handleCloseModal}>
        <div className="modal__background" >
          <section className="modal__content">
            {this.props.children}
          </section>
        </div>
      </div>
    )
  }
}

export default Modal;