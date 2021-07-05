import React from 'react';
import Backdrop from '../Backdrop';
import './index.scss';

const Modal = (props) => (
  <Backdrop show={props.show} onclick={props.closeModal}>
    <div
      onClick={(e) => e.stopPropagation()}
      className="modal"
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0',
      }}
    >
      <span class="modal__close-btn">&times;</span>
      {props.children}
    </div>
  </Backdrop>
);

export default React.memo(
  Modal,
  (prevProps, nextProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
);
