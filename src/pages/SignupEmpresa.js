import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Empresa from '../assets/IMGS/LogoEmpresas2.png';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2em;
    @media screen and (max-width:650px){
        flex-direction: column;
    }
`

const WelcomeBox = styled.div`
    displaY: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5em;
    border-right: 3px solid #B1AEF2;
    padding: 0px 30px;
    background-color: rgba(177, 174, 242, 0.29);
    border-radius: 8px;
    @media screen and (max-width:650px){
        border: none;
    }
`

const TitleWelcome = styled.h1`
    text-align: center;
    color: rgba(67, 63, 166, 0.75);
    margin: 0px;
`

const WelcomeMessage = styled.p`
    text-align: justify;
    color: #7C7AAD;
`

const WelcomeImg = styled.img`
    width: 200px;
    height: 200px;
`

const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5em;
    height: fit-content;
    width: 300px; 
`

const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.6em;
`

const ContainerCampo = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 15px;
`

const CampoIcon = styled.span`
    font-size: 30px;
    color: #8784D9;
`
const Campo = styled.input`
    padding: 0.3em;
    border-radius: 100px;
    border: none;
    background-color: #8784D9;
    color: white;
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: white;
    }
`

const FundoCampo = styled.div`
    display: flex;
    align-items: center;
    background-color: #8784D9;
    padding: 5px;
    border-radius: 100px;
`

const Entrar = styled.button`
    justify-self: end;
    border: 1px solid #8784D9;
    border-radius: 12px;
    padding: 4px;
    color: #7C7AAD;
    &:hover{
        cursor: pointer;
        background-color: #423FA6;
        color: white;
        font-weight: 600;
    }
`

const InstrucoesBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    padding: 10px;
    border-top: 1px solid rgba(0, 0, 0, 0.16);
    height: fit-content;
    width: 100%;
`
const Instrucao = styled.p`
    color: #7C7AAD;
    font-size: 0.8em;
    margin: 0px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: rgb(200, 198, 245);
    &:hover{
        color: #8784D9;
    }
`

const P = styled.p`
    display: flex;
    gap: 7px;
    margin: 0px;
    color: #8784D9;
`

function SignupEmpresa(){
    const [olho, setOlho] = useState('visibility');

    function showKey(){
        const eye = document.getElementsByClassName('hideeyeEmp')[0]
        const senha = document.getElementById('senha')
        
        olho === 'visibility_off'? setOlho('visibility'): setOlho('visibility_off')
        olho === 'visibility_off'? senha.setAttribute('type', 'password'): senha.setAttribute('type', 'text')
        eye.innerText = olho;
    }

    return(
        <>
            <Div>
            <Container>
                    <WelcomeBox>
                        <WelcomeImg src={Empresa}/> 
                        <TitleWelcome>Sign Up</TitleWelcome>
                        <WelcomeMessage>Transforme seu tempo em impacto</WelcomeMessage>
                        <InstrucoesBox>
                                <Instrucao>A senha deve conter no mínimo 8 caracteres</Instrucao>
                                <Instrucao>Pelo menos uma letra maiúscula</Instrucao>
                                <Instrucao>Pelo menos uma letra minúscula</Instrucao>
                                <Instrucao>Pelo menos um caracter especial (Ex: $, #, etc)</Instrucao>
                                <Instrucao>Pelo menos um número</Instrucao>
                        </InstrucoesBox>
                    </WelcomeBox>
                    <LoginBox>
                    
                        <FormLogin>
                            <ContainerCampo>
                                <CampoIcon className='material-symbols-outlined'>
                                    account_circle
                                </CampoIcon>
                                <FundoCampo>
                                    <Campo placeholder='Insira seu usuário'></Campo>
                                </FundoCampo>
                            </ContainerCampo>
                            <ContainerCampo>
                                <CampoIcon className='material-symbols-outlined'>
                                    lock
                                </CampoIcon>
                                <FundoCampo>
                                    <Campo id='senha' type='password' placeholder='Insira sua senha'></Campo>
                                </FundoCampo>
                                <span onClick={()=>{
                                    showKey()
                                }} className='material-symbols-outlined hideeyeEmp'>
                                    visibility_off
                                </span>
                            </ContainerCampo>
                            <Entrar>Cadastrar</Entrar>
                            <P>Já possui cadastro ?
                                <StyledLink to='/LoginEmpresa'>
                                    clique aqui
                                </StyledLink>
                            </P>
                        </FormLogin>
                    </LoginBox>
            </Container>
            </Div>
        </>
    )
}

export default SignupEmpresa;