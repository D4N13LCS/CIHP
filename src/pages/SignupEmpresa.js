import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Empresa from '../assets/IMGS/LogoEmpresas2.png';

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
  gap: 0em;
  
  @media screen and (max-width: 650px) {
    flex-direction: column;
    height:50%;
  }
`;

const Estilizado = `
  display: flex;
  justify-content: center;
  height: fit-content;
  width: 400px;
  height:480px;
  background-color: rgb(77, 47, 146);
  border-radius: 8px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
`;

const WelcomeBox = styled.div`
  ${Estilizado}
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-right: 3px solid rgb(33, 2, 54);

  @media screen and (max-width: 768px) {
    border: none;
    width: 330px;
  }

  @media screen and (max-width: 650px) {
    height: 420px;
  }
  
  `;


const WelcomeImg = styled.img`

  width: 100%;
  max-width: 200px;
  height: auto;
`;

const TitleWelcome = styled.h1`
  text-align: center;
  color: rgb(15, 14, 59);
  margin: 0;
`;

const WelcomeMessage = styled.p`
  text-align: center;
  color: rgb(27, 26, 59);
`;

const InstrucoesBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  padding: 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.16);
  width: 100%;
  
`;

const Instrucao = styled.p`
  color: rgb(188, 187, 209);
  font-size: 0.8em;
  margin: 0px;
`;

const FormLogin = styled.form`
  ${Estilizado}
  flex-direction: column;
  gap: 1em;
  padding: 20px;
  background-color: rgba(177, 174, 242, 0.29);
  width:fit-content;

  @media screen and (max-width: 768px) {
    width: fit-content;
  }

`;

const ContainerCampo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media screen and (max-width: 500px) {
    flex-direction: low;
    width: 100%;
  }
`;

const FundoCampo = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 30px;
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
`;

const Entrar = styled.button`
  justify-self: end;
  background-color: rgb(38, 26, 107);
  border: 1px solid rgb(8, 0, 153);
  border-radius: 12px;
  padding: 4px;
  color: rgb(142, 125, 187);
  width:100%;

  &:hover {
    cursor: pointer;
    background-color: rgb(59, 13, 134);
    border: 1px solid rgb(52, 8, 94);
    color: rgb(198, 182, 240);
    font-weight: 600;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
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
  padding: 0px 0px 20px 0px;
  color: rgb(40, 28, 94);
  flex-wrap: wrap;
`;

function SignupEmpresa() {
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

  // async function cadastrarVoluntario(event) {
  //   event.preventDefault();
  //   const campos = document.querySelectorAll('input');

  //   try {
  //     const response = await fetch('http://localhost:4000/cadastro/Voluntario', {
  //       method: 'POST',
  //       headers: { 'Content-type': 'application/json' },
  //       body: JSON.stringify({
  //         username: campos[0].value,
  //         senha: campos[1].value,
  //       }),
  //     });

  //     const dados = await response.json();
  //     alert(dados.message);
  //     navigate('/LoginInstituicao');
  //   } catch (error) {
  //     alert(error);
  //   }
  // }

  return (
    <Div>
      <Container>
        <WelcomeBox>
          <WelcomeImg src={Empresa} />
          <TitleWelcome>Torne-se parceiro</TitleWelcome>
          <WelcomeMessage>Transforme seu tempo em impacto</WelcomeMessage>
          <InstrucoesBox>
            <Instrucao>*A senha deve conter no mínimo 8 caracteres</Instrucao>
            <Instrucao>*Pelo menos uma letra maiúscula</Instrucao>
            <Instrucao>*Pelo menos uma letra minúscula</Instrucao>
            <Instrucao>*Pelo menos um caracter especial (Ex: $, #, etc)</Instrucao>
            <Instrucao>*Pelo menos um número</Instrucao>
          </InstrucoesBox>
        </WelcomeBox>

        <FormLogin>

        <ContainerCampo>
            <CampoIcon className="material-symbols-outlined">Mail</CampoIcon>
            <FundoCampo>
              <Campo placeholder="Insira seu E-mail" />
            </FundoCampo>
          </ContainerCampo>
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
            <span onClick={showKey} className="material-symbols-outlined hideeye">
              visibility_off
            </span>
          </ContainerCampo>



          <Entrar >Cadastrar</Entrar>
          <P>
            Já possui cadastro? <StyledLink to="/LoginInstituicao">clique aqui</StyledLink>
          </P>
        </FormLogin>
      </Container>
    </Div>
  );
}

export default SignupEmpresa;