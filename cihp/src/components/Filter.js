import styled from 'styled-components';
import { useState } from 'react';

const FilterIconContainer = styled.div`
    display: flex;
    align-items: center;
`

const FilterIcon = styled.span`
    padding: 10px;
    border: 1px solid #423FA6;
    border-radius: 100px;
    color:hsla(0, 0.00%, 0.00%, 0.59);
    &:hover{
        cursor: pointer;
    }
    &::after{
        position: relative;
        top: -5px;
        margin-left: 5px;
        content: "Filtros";
        color:hsla(0, 0.00%, 0.00%, 0.59);
        font-family: 'mona';
        font-size: 0.7em;
        z-index: -1;
    }
`

const OpcoesContainer = styled.div`
    display: none;
    justify-content: center;
    width: 100%;
`

const OpcoesSelect = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.8em;
    background-color: #423FA6;
    border-radius: 20px;
    width: 80%;
    padding: 1em;
    position: absolute;
    z-index: 1;
`

const LegendField = styled.legend`

`

const OpcaoCategoria = styled.fieldset`
    display: flex;
    flex-direction: column;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.52);
    border-radius: 10px;
`

const TitleOpcao = styled.label`
`

const Opcao  = styled.input`

`

const Aplicar = styled.button`
    align-self: end;
    background-color: #423FA6;
    color: rgba(255, 255, 255, 0.52);
    border-radius: 100px;
    border: 1px solid white;
    width: 100px;
    height: 35px;
    &:hover{
        cursor: pointer;
        color: white;
    }
`

function Filter(){
    const [disp, alterDisp] = useState('flex');

    const causas =  ['Proteção animal', 'Violência contra mulher', 'Meio ambiente', 'Equidade racial']
    
    const tempo = ['últimas 24h', 'há 7 dias', 'há 15 dias', 'há 1 mês', 'Todos']

    const localidade = ['São Gonçalo', 'São José', 'Inoã', 'Itaipuaçu', 'Todos']

    
    function mostrar_opt(){
        disp === 'none'?alterDisp('flex'):alterDisp('none')
        document.getElementById('cont').style.display = disp;
    }

    return (
        <>
        <FilterIconContainer onClick={()=>{mostrar_opt()}}>
            <FilterIcon className='material-symbols-outlined'>filter_list</FilterIcon>
        </FilterIconContainer>
        <OpcoesContainer id='cont'>
            <OpcoesSelect>
                <OpcaoCategoria>
                    <LegendField>Localidade</LegendField>
                    {localidade.map((loc)=>{
                        return(
                            <TitleOpcao>
                            <Opcao type='radio' name='option' value={loc}/>
                            {loc}
                            </TitleOpcao>
                        )
                    
                })}
                </OpcaoCategoria>
                <OpcaoCategoria>
                    <LegendField>Tempo</LegendField>
                    {tempo.map((loc)=>{
                        return(
                            <TitleOpcao>
                            <Opcao type='radio' name='option1' value={loc}/>
                            {loc}
                            </TitleOpcao>
                        )
                    
                })}
                </OpcaoCategoria>
                <OpcaoCategoria>
                    <LegendField>Causas</LegendField>
                    {causas.map((loc)=>{
                        return(
                            <TitleOpcao>
                            <Opcao type='radio' name='option2' value={loc}/>
                            {loc}
                            </TitleOpcao>
                        )
                    
                })}
                </OpcaoCategoria>
                <Aplicar>Aplicar filtro</Aplicar>
            </OpcoesSelect>
        </OpcoesContainer>
        </>
    )
}

export default Filter;