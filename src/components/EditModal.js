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
    const [user_nome, setUser_nome] = useState(JSON.parse(sessionStorage.getItem('info')).username);
    const [user_email, setUser_email] = useState(JSON.parse(sessionStorage.getItem('info')).email);
    
    function ShowContent(){
        
        if (JSON.parse(sessionStorage.getItem('info')).tipo === 'voluntario'){
            return (
                <>
                    <ModalHead>
                        <ModalTitle>Editar perfil</ModalTitle>
                        <CloseModal className='material-symbols-outlined' onClick={()=>{changeDisplay()}}>close</CloseModal>
                    </ModalHead>

                    <Container>
                    <ModalImg src={props.img}/>
                    <ContentContainer>
                        <ModalFieldContainer>
                            <ModalLabel>Nome:</ModalLabel>
                            <ModalField className='field_Modal' required defaultValue={user_nome}/>
                        </ModalFieldContainer>
                        <ModalFieldContainer>
                            <ModalLabel>Email:</ModalLabel>
                            <ModalField className='field_Modal'  required defaultValue={user_email}/>
                        </ModalFieldContainer>
                    </ContentContainer>
                    </Container>
                    
                    <SelectImg id='selectPic' type='file' defaultValue={''}/>
                    <ModalButton onClick={()=>{
                        updateProfilePic(document.querySelectorAll('.field_Modal')[0], document.querySelectorAll('.field_Modal')[1]);
                        changeDisplay();
                        }}>Salvar</ModalButton>
                </>
            )
        }else{
            return (
                <>
                    
                </>
            )
        }
    }

    function changeDisplay(){
        const modal = document.getElementById('modal');
        props.disp === 'none'?props.setDisp('flex'):props.setDisp('none');
        modal.style.display = props.disp;
    }

    async function updateProfilePic(name, mail){
        try{
            const formData = new FormData();
            const selectPic = document.getElementById('selectPic');
            formData.append("photo", selectPic.files[0]);
            formData.append('user', JSON.stringify({nome: name.value, email: mail.value}))
            
            const token = sessionStorage.getItem('token');
            const response = await fetch(`http://localhost:4000/voluntario/edit/${JSON.parse(sessionStorage.getItem('info')).id}/profile-photo`, {
                method: 'PUT',
                body: formData,
                headers: {Authorization: `Bearer ${token}`}
            })
            
            const data = await response.json();
            alert(data.message);
            props.setPhoto(data.pic);
            setUser_nome(name.value);
            setUser_email(mail.value);
            sessionStorage.setItem('info', JSON.stringify({id: JSON.parse(sessionStorage.getItem('info')).id, username: name.value, email: mail.value, tipo: JSON.parse(sessionStorage.getItem('info')).tipo, iat: JSON.parse(sessionStorage.getItem('info')).iat, exp: JSON.parse(sessionStorage.getItem('info')).exp}))
        }catch(error){
            alert(error)
        }
    }

    return (
        <>
            
                <Modal id='modal'>
                    {ShowContent()}
                </Modal>
   
        </>
    )
}

export default EditModal;