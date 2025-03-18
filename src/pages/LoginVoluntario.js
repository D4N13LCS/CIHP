import { useState } from 'react';
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
    color: #423FA6;
    margin: 0px;
`

const WelcomeMessage = styled.p`
    text-align: justify;
    color:rgba(99, 97, 97, 0.58);
`

const WelcomeImg = styled.img`
    width: 200px;
    height: 200px;
`

const LoginBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
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
    border: 1px solid #B1AEF2;
    border-radius: 12px;
    padding: 4px;
    color: rgba(156, 152, 152, 0.67);
    width: 100%;
    &:hover{
        cursor: pointer;
        background-color: #423FA6;
        color: white;
        font-weight: 600;
    }
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

function LoginVoluntario(){
    const [olho, setOlho] = useState('visibility');
    const navigate = useNavigate();

    function showKey(){
        const eye = document.getElementsByClassName('hideeye')[0]
        const senha = document.getElementById('senha')
        
        olho === 'visibility_off'? setOlho('visibility'): setOlho('visibility_off')
        olho === 'visibility_off'? senha.setAttribute('type', 'password'): senha.setAttribute('type', 'text')
        eye.innerText = olho;
    }

    function Logar(event){
        event.preventDefault();
        const campos = document.querySelectorAll('input');

        fetch('http://localhost:4000/Login', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username: campos[0].value, key: campos[1].value})
        })
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            alert(data.message);
            sessionStorage.setItem('token', data.token)
            navigate('/voluntario')
        })
        .catch((err)=>{
            alert(err);
        })
    }

    return(
        <>
            <Container>
                    <WelcomeBox>
                        <WelcomeImg src="LogoICO.ico"/>
                        <TitleWelcome>Welcome back</TitleWelcome>
                        <WelcomeMessage>Transforme seu tempo em impacto</WelcomeMessage>
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
                            <Link to='/voluntario'>
                                <Entrar onClick={(evt)=>{Logar(evt)}}>Entrar</Entrar>
                            </Link>
                            <P>Não possui cadastro ?
                                <StyledLink to='/SignupVoluntario'>
                                    clique aqui
                                </StyledLink>
                            </P>
                        </FormLogin>
                    </LoginBox>
            </Container>
        </>
    )
}


export default LoginVoluntario;