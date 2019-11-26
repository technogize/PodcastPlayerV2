/* eslint-disable react/destructuring-assignment */

import React from 'react';
import PropTypes from 'prop-types';

import ReactModal from 'react-modal';
import Button from '../Button';

ReactModal.setAppElement('#root');

const Modal = props => {
  const { isOpen, setModalOpen } = props;

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ReactModal isOpen={isOpen}>
      <Button
        buttonText="X"
        className="Button--icon Modal__close"
        onClick={closeModal}
      />
      <div>{props.children}</div>
    </ReactModal>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  setModalOpen: PropTypes.func
};

Modal.defaultProps = {
  isOpen: false,
  setModalOpen: () => {}
};

export default Modal;
