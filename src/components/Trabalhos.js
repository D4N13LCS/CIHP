import styled from 'styled-componenets'
import {useState} from 'react';

const ContainerCarrossel = styled.div`
    display: flex;
    justify-content: space-between;
`

const Seta = styled.span`
    font-size; 0.8em;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
`
const CardImage = styled.img`

`

const CardTitle = styled.h1`
    font-size: 0.9em;
`

const CardDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4em;
`

const CardIcon = styled.span`
    font-size: 30px;
`

function Trabalhos(){
    return(
        <>
            <ContainerCarrossel>
                <Seta className='material-symbols-outlined'>
                    arrow_forward_IOS
                </Seta>
                <Seta className='material-symbols-outlined'>
                    arrow_backward_IOS
                </Seta>
            </ContainerCarrossel>
        </>
    )
}