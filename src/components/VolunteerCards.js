import React from "react";
import { Card } from "react-bootstrap";
import { FaRegClock } from "react-icons/fa";
import styled from 'styled-components'


const CardButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 30px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 0.3em;
    margin: 5px 0px 0px 0px;
    background-color: #423FA6;
    color: white;

    &:hover{
        background-color: #817DE9;
    }
`

const VolunteerCard = ({imageUrl, location, title, duration, text, rota}) => {

    function mostrar_botao(){
            if (rota === 'voluntario'){
                return <CardButton>{'Inscrever-se'}</CardButton>
            }else if (rota === 'ONG'){
                return (
                    <>
                        <CardButton>{'Editar'}</CardButton> 
                        <CardButton>{'Excluir'}</CardButton> 
                    </>
                )
    
            }else if (rota === 'Empresa'){
                return <CardButton>{'Premiar vaga'}</CardButton> 
            }else{
                return
            }
        }

    return (
        <Card className="shadow-sm border-0 rounded-4 " style={{ width: '18rem', backgroundColor: '#ede7f6' }}>
            <Card.Img variant="top" src={imageUrl} style={{height: '13rem'}} />
            <Card.Body className="p-2.5">
                <span className="badge bg-success text-white mb-2">{location}</span>
                <Card.Title style={{color:"#4a148c", fontWeight:"bold"}}>{title}</Card.Title>
                <Card.Text className="gap-2 d-flex aling-items-center ">
                    <FaRegClock />{duration}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center mt-2">
                    <span className="font-weight-normal ">{text}</span>
                </div>
                {mostrar_botao()}
            </Card.Body>
        </Card>
    );
};

export default VolunteerCard;