import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Modal = styled.div`
    position: absolute;
    display: none;
    flex-direction: column;
    gap: 0.6em;
    background-color: white;
    box-shadow: 0.5px 1px 2.5px 1px rgba(0, 0, 0, 0.68);
    border-radius: 5px;
    padding: 10px;
`

const ModalHead = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(128, 126, 126, 0.39);
    padding: 2px;
`

const ModalTitle = styled.h1`
    font-size: 0.9em;
`

const CloseModal = styled.span`
    &:hover{
        cursor: pointer;
    }
`

const ModalImg = styled.img`
    height: 70px; 
    width: 70px; 
`

const Container = styled.div`
    display: flex;
    gap: 0.5em;
`

const SelectImg = styled.input`
    
`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    gap: 1em;
`

const ModalFieldContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5em;
    justify-content: space-between;
`

const ModalLabel = styled.label`

`

const ModalField = styled.input`

`

const ModalButton = styled.button`
    color: white;
    background-color: #6941C6;
    border: 1px solid black;
    &:hover{
        background-color:rgb(99, 54, 204);
    }
`

function EditModal(props){
    

    function changeDisplay(){
        const modal = document.getElementById('modal');
        props.disp === 'none'?props.setDisp('flex'):props.setDisp('none');
        modal.style.display = props.disp;
    }

    async function updateProfilePic(){
        try{
            const formData = new FormData();
            const selectPic = document.getElementById('selectPic');
            formData.append("photo", selectPic.files[0]);
            const campos = document.getElementsByClassName('field');
            formData.append('user', JSON.stringify({nome: campos[0].value, email: campos[1].value}))
            const token = sessionStorage.getItem('token');
            const response = await fetch(`http://localhost:4000/voluntario/edit/${JSON.parse(sessionStorage.getItem('info')).id}/profile-photo`, {
                method: 'PUT',
                body: formData,
                headers: {Authorization: `Bearer ${token}`}
            })
            
            const data = await response.json();
            alert(data.message);
            props.setPhoto(data.pic);
        }catch(error){
            alert(error)
        }
    }

    return (
        <>
            
                <Modal id='modal'>
                    <ModalHead>
                        <ModalTitle>Editar perfil</ModalTitle>
                        <CloseModal className='material-symbols-outlined' onClick={()=>{changeDisplay()}}>close</CloseModal>
                    </ModalHead>

                    <Container>
                    <ModalImg src={props.img}/>
                    <ContentContainer>
                        <ModalFieldContainer>
                            <ModalLabel>Nome:</ModalLabel>
                            <ModalField className='field' defaultValue={JSON.parse(sessionStorage.getItem('info')).username}/>
                        </ModalFieldContainer>
                        <ModalFieldContainer>
                            <ModalLabel>Email:</ModalLabel>
                            <ModalField className='field'  defaultValue={JSON.parse(sessionStorage.getItem('info')).email}/>
                        </ModalFieldContainer>
                    </ContentContainer>
                    </Container>
                    
                    <SelectImg id='selectPic' type='file'/>
                    <ModalButton onClick={()=>{updateProfilePic()}}>Salvar</ModalButton>
                </Modal>
   
        </>
    )
}

export default EditModal;