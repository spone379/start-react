import React from 'react';

import { useDidMount, useWillUnmount } from '../../hooks';
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

const Modal = (props) => {
  useDidMount(() => document.addEventListener("keydown", handleKeyDown, false));

  useWillUnmount(() => document.removeEventListener("keydown", handleKeyDown, false));

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      props.closeModal();
    }
  }

  const handleCloseModal = (e) => {
    if (e.target.className !== "modal__background") {
      return;
    }
    props.closeModal();
  }

  const activeClass = props.isOpen
    ? 'modal__container open'
    : 'modal__container open out';

  return (
    <div
      className={activeClass}
      style={props.zIndex ? { zIndex: props.zIndex } : null}
      onMouseDown={handleCloseModal}>
      <div className="modal__background" >
        <article className="modal__content">
          {props.children}
        </article>
      </div>
    </div>
  )
}

export default Modal;