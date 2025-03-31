import React from "react";
import styled from 'styled-components';

const EstatistcaContainer = styled.section`
    display: flex;
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

`

const EstatiscaFilter = styled.select`
    background-color: #DBD9E9;
    color: #3A2D75;
    padding: 3px;
    border-radius: 7px;
    font-weight: 500;
`
const EstatiscaFilterOpc = styled.option`
    
`

const EstatiscaIlustration = styled.img`
    height: 250px;
    width: 300px;
`

const EstatiscaInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25em;
    background-color:rgba(180, 179, 179, 0.28);
    padding: 2em;
`

const EstatisticaCampo = styled.div`
    display: flex;
    gap: 1em;
    width: 100%;
    color:rgb(65, 63, 185);
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
               
                <EstatiscaFilterContainer>
                    <EstatiscaFilter>
                        <EstatiscaFilterOpc>Qualquer data</EstatiscaFilterOpc>
                        <EstatiscaFilterOpc>Esta semana</EstatiscaFilterOpc>
                        <EstatiscaFilterOpc>Este mês</EstatiscaFilterOpc>
                        <EstatiscaFilterOpc>Nos últimos 6 meses</EstatiscaFilterOpc>
                        <EstatiscaFilterOpc>No último ano</EstatiscaFilterOpc>
                    </EstatiscaFilter>
                </EstatiscaFilterContainer>
            </EstatistcaContainer>
        </>
    )
}

export default Status;