import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Modal = styled.div`
    position: absolute;
    display: none;
    flex-direction: column;
    gap: 0.6em;
    background-color: white;
    box-shadow: 0.5px 1px 2.5px 1px rgba(0, 0, 0, 0.68);
    border-radius: 5px;
    padding: 10px;
    z-index: 10;
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
    background-color: #F70101;
    border: 1px solid black;
    &:hover{
        background-color:rgb(230, 5, 5);
    }
`

function DeleteModal(props){
    const navigate = useNavigate();

    async function deleteAccount(){
        try{
          const campos = document.querySelectorAll('#delete_modal .field');
          const response = await fetch(`http://localhost:4000/voluntario/delete/${JSON.parse(sessionStorage.getItem('info')).id}`, {
            method: 'DELETE',
            headers: {Authorization: `Bearer ${sessionStorage.getItem('token')}`, 'Content-Type': 'application/json'},
            body: JSON.stringify({email: campos[0].value, senha: campos[1].value})
          })
    
          const data = await response.json()
          alert(data.message);
          sessionStorage.removeItem('info');
          sessionStorage.removeItem('token');
          navigate('/');
        }catch(err){
          alert(err)
        }
      }

    return (
        <>
            <Modal id='delete_modal'>
                <ModalHead>
                    <ModalTitle>Deletar perfil</ModalTitle>
                    <CloseModal className='material-symbols-outlined' onClick={()=>{
                        props.showDeleteBox()
                    } }>close</CloseModal>
                </ModalHead>

                <ContentContainer>
                    <ModalFieldContainer>
                        <ModalLabel>Email:</ModalLabel>
                        <ModalField className='field' required placeholder='Digite seu Email'/>
                    </ModalFieldContainer>
                    <ModalFieldContainer>
                        <ModalLabel>Senha:</ModalLabel>
                        <ModalField className='field' required placeholder='Digite sua senha'/>
                    </ModalFieldContainer>
                </ContentContainer>
                <ModalButton onClick={()=>{deleteAccount()}}>Deletar</ModalButton>
            </Modal>
        </>
    )
}

export default DeleteModal;