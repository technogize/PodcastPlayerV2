/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ReactModal from 'react-modal';
import Button from '../Button';

ReactModal.setAppElement('#root');

const Modal = props => {
  const [isOpen, setModalOpen] = useState(false);

  const { buttonText, buttonClass } = props;

  return (
    <>
      <Button
        className={buttonClass}
        buttonText={buttonText}
        onClick={() => {
          setModalOpen(true);
        }}
      />

      <ReactModal
        className="Modal"
        overlayClassName="Modal__overlay"
        isOpen={isOpen}
      >
        <Button
          className="Button--icon Button--icon-x Modal__close-btn"
          onClick={() => {
            setModalOpen(false);
          }}
        />
        <div>{props.children}</div>
      </ReactModal>
    </>
  );
};

Modal.propTypes = {
  buttonText: PropTypes.string,
  buttonClass: PropTypes.string
};

Modal.defaultProps = {
  buttonText: null,
  buttonClass: null
};

export default Modal;
