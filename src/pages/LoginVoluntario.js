import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden; 

    &::before {
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        background-image: url('https://cdn.pixabay.com/photo/2019/11/11/09/40/black-sea-4617810_1280.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        filter: blur(5px);
        z-index: 0;
    }

 
    & > * {
        position: relative;
        z-index: 1;
    }

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
    border-right: 3px solid rgb(33, 2, 54);
    padding: 0px 30px;
    padding-bottom: 1em;
    background-color:rgb(77, 47, 146);
    border-radius: 8px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
    @media screen and (max-width:650px){
        border: none;
    }
`

const TitleWelcome = styled.h1`
    text-align: center;
    color:rgb(15, 14, 59);
    margin: 0px;
`

const WelcomeMessage = styled.p`
    text-align: justify;
    color:rgb(27, 26, 59);
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
    background-color: rgb(177, 174, 242, 0.29);
    padding: 50px; 
    border-radius: 8px; 
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
    height: 320px;
    width: 3000px; 
`

const ContainerCampo = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 15px;
    
`

const CampoIcon = styled.span`
    font-size: 30px;
    color:rgb(38, 36, 88);
`
const Campo = styled.input`
    padding: 0.3em;
    border-radius: 100px;
    border: none;
    background-color:rgb(158, 158, 196);
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
    background-color:rgb(158, 158, 196);
    padding: 5px;
    border-radius: 100px;
`

const Entrar = styled.button`
    justify-self: end;
    background-color:rgb(38, 26, 107);
    border: 1px solid rgb(8, 0, 153);
    border-radius: 12px;
    padding: 4px;
    color:rgb(142, 125, 187);
    width: 100%;
    &:hover{
        cursor: pointer;
        background-color:rgb(59, 13, 134);
        border: 1px solid rgb(52, 8, 94);
        color: rgb(198, 182, 240);
        font-weight: 600;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color:rgb(223, 222, 245);
    &:hover{
        color:rgb(155, 8, 253);
    }
`

const P = styled.p`
    display: flex;
    gap: 7px;
    margin: 0px;
    color:rgb(40, 28, 94);
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

        alert('Login realizado com sucesso!')
        navigate('/voluntario')
        
        // fetch('http://localhost:4000/Login', {
        //     method: "POST",
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify({username: campos[0].value, key: campos[1].value})
        // })
        // .then((res)=>{
        //     return res.json();
        // })
        // .then((data)=>{
        //     alert(data.message);
        //     sessionStorage.setItem('token', data.token)
        //     navigate('/voluntario')
        // })
        // .catch((err)=>{
        //     alert(err);
        // })
    }

    return(
        <>
            <Div>
            <Container>
                    <WelcomeBox>
                        <WelcomeImg src="LogoICO.ico"/>
                        <TitleWelcome>Bem vindo de volta!</TitleWelcome>
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
            </Div>
        </>
    )
}


export default LoginVoluntario;
