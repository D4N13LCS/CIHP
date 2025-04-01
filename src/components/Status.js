import React from "react";
import styled from 'styled-components';

const EstatistcaContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em;
    border-bottom: 1px dotted rgba(61, 61, 61, 0.16);
    padding-bottom: 1em;
    
    
`

const EstatiscaH1 = styled.h1`
    align-self: start;
    font-size: 1.35em;
    color: #4242A9;
    margin-bottom: 1em;
`

const EstatiscaFilterContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 85%;
`

const EstatiscaFilter = styled.select`
    // background-color: #DBD9E9;
    color: #3A2D75;
    padding: 3px;
    border-radius: 7px;
    font-weight: 500;
    width: 85%;
    
    @media screen and (max-width: 360px){
    
    }
    @media screen and (min-width: 361px) and (max-width: 500px){
    
    }
    @media screen and (min-width: 501px) and (max-width: 768px){
        
    }
    @media screen and (min-width: 769px) and (max-width: 1024px){
        width: 100%;
       
    }
    @media screen and (min-width: 1025px) and (max-width: 1300px){
    
    }
    @media screen and (min-width: 1301px){

    }
`
const EstatiscaFilterOpc = styled.option`
    
`

const EstatiscaIlustration = styled.img`
    height: 265px;
    width: 265px;
    
    @media screen and (max-width: 360px){
    
    }
    @media screen and (min-width: 361px) and (max-width: 500px){
    
    }
    @media screen and (min-width: 501px) and (max-width: 768px){
        height: 250px;
        width: 250px;
    }
    @media screen and (min-width: 769px) and (max-width: 1024px){
        height: 300px;
        width: 300px;
    }
    @media screen and (min-width: 1025px) and (max-width: 1300px){
    
    }
    @media screen and (min-width: 1301px){

    }
`

const EstatiscaInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25em;
    // background-color:rgba(180, 179, 179, 0.28);
    padding: 2em;
    order: 1;

    @media screen and (max-width: 360px){
    
    }
    @media screen and (min-width: 361px) and (max-width: 500px){
    
    }
    @media screen and (min-width: 501px) and (max-width: 768px){
        height: 250px;
        width: 250px;
        
    }
    @media screen and (min-width: 769px) and (max-width: 1024px){
        height: 300px;
        width: 300px;
    }
    @media screen and (min-width: 1025px) and (max-width: 1300px){
    
    }
    @media screen and (min-width: 1301px){

    }
`

const EstatisticaCampo = styled.div`
    display: flex;
    gap: 1em;
    width: 100%;
    color:rgb(65, 63, 185);

    @media screen and (max-width: 360px){
    
    }
    @media screen and (min-width: 361px) and (max-width: 500px){
    
    }
    @media screen and (min-width: 501px) and (max-width: 768px){
        font-size: 0.9em;
    }
    @media screen and (min-width: 769px) and (max-width: 1024px){
    
    }
    @media screen and (min-width: 1025px) and (max-width: 1300px){
    
    }
    @media screen and (min-width: 1301px){

    }
`

const EstatiscaIcon = styled.img`
    height: 20px;
    width: 20px;
`

const EstatiscaTexto = styled.p`
    
`

function Status(props){
    return (
        <>
            <EstatistcaContainer>
                
                <EstatiscaFilterContainer>
                    <EstatiscaFilter>
                        <EstatiscaFilterOpc>Qualquer data</EstatiscaFilterOpc>
                        <EstatiscaFilterOpc>Esta semana</EstatiscaFilterOpc>
                        <EstatiscaFilterOpc>Este mês</EstatiscaFilterOpc>
                        <EstatiscaFilterOpc>Nos últimos 6 meses</EstatiscaFilterOpc>
                        <EstatiscaFilterOpc>No último ano</EstatiscaFilterOpc>
                    </EstatiscaFilter>
                </EstatiscaFilterContainer>

                <EstatiscaInfo>
                    <EstatiscaH1>Estatísticas</EstatiscaH1>
                    <EstatisticaCampo>
                        <EstatiscaIcon src='https://img.icons8.com/?size=100&id=3979&format=png&color=423FB9' /> 
                        <EstatiscaTexto>{props.trabalhos} Trabalhos Realizados</EstatiscaTexto>
                    </EstatisticaCampo>
                    <EstatisticaCampo>
                        <EstatiscaIcon src='https://img.icons8.com/?size=100&id=82767&format=png&color=423FB9'/> <EstatiscaTexto>{props.horas} Horas Dedicadas</EstatiscaTexto>
                    </EstatisticaCampo>
                    <EstatisticaCampo>
                        <EstatiscaIcon src='https://img.icons8.com/?size=100&id=2436&format=png&color=423FB9'></EstatiscaIcon> <EstatiscaTexto>{props.bairros} Bairros atingidos</EstatiscaTexto>
                    </EstatisticaCampo>
                    
                </EstatiscaInfo>

                <EstatiscaIlustration src='https://i.pinimg.com/originals/ae/e6/09/aee6093e58469b2c66072e0a05957d50.gif'/>
               
                
            </EstatistcaContainer>
        </>
    )
}

export default Status;