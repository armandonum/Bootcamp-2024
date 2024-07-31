// components/Modal.js
import React from 'react';
import {ModalBackground,ModalContent,ModalBody, CloseButton} from './modal.style';
import { colours } from './colors';



const Modal = ({ show, onClose, children,name }) => {
  if (!show) return null;

  return (
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()} bgColor={colours[name]} >
 
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ModalBackground>
  );
};

export default Modal;
