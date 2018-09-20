import React from 'react';

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
const Modal = ({ closeModal, isOpen, children }) => {

  const activeClass = isOpen
    ? 'modal__container open'
    : 'modal__container open out';

  const handleCloseModal = (e) => {
    if (e.target.className !== "modal__background") {
      return;
    }
    closeModal();
  }

  return (
    <div className={activeClass} onClick={handleCloseModal}>
      <div className="modal__background" >
        <section className="modal__content">
          {children}
        </section>
      </div>
    </div>
  );
};

export default Modal;