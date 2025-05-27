import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  display: ${({ disp }) => disp};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2em;
  border-radius: 10px;
  max-width: 400px;
`;

const CloseButton = styled.button`
  margin-top: 1em;
  background: #423FA6;
  color: white;
  padding: 0.5em;
  border: none;
  border-radius: 5px;
`;

const EditModal = ({ disp, setDisp, photo, setPhoto, img }) => {
  function closeModal() {
    setDisp('none');
  }

  return (
    <ModalOverlay disp={disp} id="modal">
      <ModalContent>
        <h2>Editar Perfil</h2>
        <img src={img} alt="Foto do perfil" style={{ width: '100px', borderRadius: '50%' }} />
        {/* Coloque aqui os campos de edição se quiser */}
        <CloseButton onClick={closeModal}>Fechar</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default EditModal;
