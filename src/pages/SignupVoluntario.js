import { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2em;
    height: 100vh;
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
    background-color:rgba(177, 174, 242, 0.29);
    border-radius: 8px;
    @media screen and (max-width:650px){
        border: none;
    }
`

const TitleWelcome = styled.h1`
    text-align: center;
    color:rgba(67, 63, 166, 0.75);
    margin: 0px;
`

const WelcomeMessage = styled.p`
    text-align: justify;
    color:rgba(175, 175, 175, 0.69);
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
    color: rgba(156, 152, 152, 0.67);
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
    color: rgba(175, 175, 175, 0.69);
    font-size: 0.8em;
    margin: 0px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color:rgb(200, 198, 245);
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

function SignupVoluntario(){
    const [olho, setOlho] = useState('visibility');
    const navigate = useNavigate();

    function showKey(){
        const eye = document.getElementsByClassName('hideeye')[0]
        const senha = document.getElementById('senha')
        
        olho === 'visibility_off'? setOlho('visibility'): setOlho('visibility_off')
        olho === 'visibility_off'? senha.setAttribute('type', 'password'): senha.setAttribute('type', 'text')
        eye.innerText = olho;
    }

    

    async function cadastrarVoluntario(event){
        event.preventDefault();
        const campos = document.querySelectorAll('input');
        try{
            const response = await fetch('http://localhost:4000/cadastro/Voluntario', {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(
                    {username: campos[0].value, senha: campos[1].value}
                )
                })
            const dados = response.json()
            alert(dados.message)
            navigate('/LoginVoluntario')
        }catch(error){
            alert(error)
        }
        
    }
    

    return(
        <>
            <Container>
                    <WelcomeBox>
                        <WelcomeImg src='LogoICO.ico'/>
                        <TitleWelcome> Torne-se voluntário</TitleWelcome>
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
                                }} className='material-symbols-outlined hideeye'>
                                    visibility_off
                                </span>
                            </ContainerCampo>
                            <Entrar onClick={(evt)=>{cadastrarVoluntario(evt)}}>Cadastrar</Entrar>
                            <P>Já possui cadastro ?
                                <StyledLink to='/LoginVoluntario'>
                                    clique aqui
                                </StyledLink>
                            </P>
                        </FormLogin>
                    </LoginBox>
            </Container>
        </>
    )
}

export default SignupVoluntario;