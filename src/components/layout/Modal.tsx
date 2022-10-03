import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Button from './Button';
import Card from './Card';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0%;
  left: 0%;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.80);

  & .modal-container {
    position: fixed;
    overflow-x: hidden;
    top: 20%;
    width: 15%;
    min-width: 500px;
    border-radius: 10px;
  }
`;

const ModalButton = styled(Button)`
  width: 100%;
`;

interface ModalProps {
  isShown: boolean;
  toggleModal: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = function Modal({ isShown, toggleModal, children }) {
  const modal = (
    <Wrapper>
      <Card className="modal-container">
        {children}
        <ModalButton type="button" onClick={toggleModal}>Close</ModalButton>
      </Card>
    </Wrapper>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

export default Modal;
