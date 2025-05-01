import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LogoONG from '../assets/IMGS/LogoONGs.png';


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
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 650px) {
        flex-direction: column;
    }
`;

// Usei de base, dps so utilizei pra aplicarnas onde queria
const Estilizado = `
    display: flex;
    justify-content: center;
    
    height: 330px;
    width: 400px;
    background-color: rgb(77, 47, 146);
    border-radius: 8px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
`;

const WelcomeBox = styled.div`
    ${Estilizado}
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5em;
    padding: 20px 10px;
    
    border-right: 3px solid rgb(33, 2, 54);
    @media screen and (max-width: 650px) {
        border: none;
    }
`;

const TitleWelcome = styled.h1`
    text-align: center;
    color: rgb(15, 14, 59);
    margin: 0px;
`;

const WelcomeMessage = styled.p`
    text-align: justify;
    color: rgb(27, 26, 59);
`;

const WelcomeImg = styled.img`
    width: 200px;
    height: 200px;
`;

const FormLogin = styled.form`
    ${Estilizado}
    display: flex;
    flex-direction: column;
    gap: 0.6em;
    padding: 20px 0px 20px 50px;
    background-color: rgb(177, 174, 242, 0.29);
`;

const ContainerCampo = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 15px;
`;

const CampoIcon = styled.span`
    font-size: 30px;
    color: rgb(38, 36, 88);
`;

const Campo = styled.input`
    padding: 0.3em;
    border-radius: 100px;
    border: 2px solid rgb(50, 34, 73); 
    background-color: rgb(173, 159, 185, 0.70);
    color: white;

    &:focus {
        outline: none;
        border-color:rgb(69, 51, 129);
        
        
    }

    &::placeholder {
        color: rgb(209, 204, 219);
    }
`

const FundoCampo = styled.div`
    display: flex;
    align-items: center;
    
    padding: 5px;
    border-radius: 30px;
`;

const Entrar = styled.button`
    justify-self: end;
    background-color: rgb(38, 26, 107);
    border: 1px solid rgb(8, 0, 153);
    border-radius: 12px;
    padding: 4px;
    color: rgb(142, 125, 187);
    width: 80%;
    &:hover {
        cursor: pointer;
        background-color: rgb(59, 13, 134);
        border: 1px solid rgb(52, 8, 94);
        color: rgb(198, 182, 240);
        font-weight: 600;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: rgb(223, 222, 245);
    text-decoration: underline;
    &:hover {
        color: rgb(155, 8, 253);
    }
`;

const P = styled.p`
    display: flex;
    gap: 7px;
    margin: 0px;
    
    color: rgb(40, 28, 94);
`;

const PreferencesCheck = styled.input`
    
    
`
const CheckLabel = styled.label`
    color: rgb(67, 54, 126);
    font-size: 14px;  
     
`

const PreferencesCampo = styled.div`
    display: flex;
    align-items: center;
    display: flex;
    gap: 0.3em;
    ;
    
`

function LoginONG() {
    const [olho, setOlho] = useState('visibility');
    const navigate = useNavigate();

    function showKey() {
        const eye = document.getElementsByClassName('hideeye')[0];
        const senha = document.getElementById('senha');

        olho === 'visibility_off' ? setOlho('visibility') : setOlho('visibility_off');
        olho === 'visibility_off'
            ? senha.setAttribute('type', 'password')
            : senha.setAttribute('type', 'text');
        eye.innerText = olho;
    }

    function Logar(event) {
        event.preventDefault();
        const campos = document.querySelectorAll('input');

        alert('Login realizado com sucesso!');
        navigate('/ONG');

        // fetch('http://localhost:4000/Login', {
        //     method: "POST",
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify({username: campos[0].value, key: campos[1].value})
        // })
        // .then((res)=> res.json())
        // .then((data)=>{
        //     alert(data.message);
        //     sessionStorage.setItem('token', data.token)
        //     navigate('/voluntario')
        // })
        // .catch((err)=>{
        //     alert(err);
        // })
    }

    return (
        <Div>
            <Container>
                <WelcomeBox>
                    <WelcomeImg src={LogoONG} />
                    <TitleWelcome>Bem vindo de volta!</TitleWelcome>
                    <WelcomeMessage>Transforme seu tempo em impacto</WelcomeMessage>
                </WelcomeBox>

                <FormLogin onSubmit={Logar}>
                    <ContainerCampo>
                        <CampoIcon className="material-symbols-outlined">account_circle</CampoIcon>
                        <FundoCampo>
                            <Campo placeholder="Insira seu usuário" />
                        </FundoCampo>
                    </ContainerCampo>
                    <ContainerCampo>
                        <CampoIcon className="material-symbols-outlined">lock</CampoIcon>
                        <FundoCampo>
                            <Campo id="senha" type="password" placeholder="Insira sua senha" />
                        </FundoCampo>
                        <span
                            onClick={showKey}
                            className="material-symbols-outlined hideeye"
                        >
                            visibility_off
                        </span>
                    </ContainerCampo>
                    <PreferencesCampo>
                            <PreferencesCheck type='checkbox'></PreferencesCheck>
                            <CheckLabel>Lembrar senha?</CheckLabel>
                    </PreferencesCampo>
                    <Entrar type="submit">Entrar</Entrar>
                    <P>
                        Não possui cadastro ?
                        <StyledLink to="/SignupVoluntario">clique aqui</StyledLink>
                    </P>
                </FormLogin>
            </Container>
        </Div>
    );
}

export default LoginONG;