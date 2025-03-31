import { useNavigate, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  background-color: #c8c3d2;
`;

const SideBar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1.1em;
  background-color: #4b3f6e;
  transition: width 0.3s;
  width: 3em;

  &:hover {
    width: 15em;
  }
`;

const MenuLateral = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
  list-style-type: none;
  padding: 10px 10px 0px 10px;
`;

const OpcLateral = styled.li`
  display: flex;
  align-items: center;
  padding: 3px;
  width: 100%;
  text-align: left;
  color: rgba(204, 203, 231, 0.49);
  opacity: 1;

  &:hover {
    cursor: pointer;
  }

  &.marcados {
    color: #423fa6;
    font-weight: bold;
  }

  span {
    margin-right: ${(props) => (props.showText ? '10px' : '0')};
  }

  span.text {
    opacity: 0;
    transition: opacity 0.3s;
    ${SideBar}:hover & {
      opacity: 1;
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d3d2f8;
  color: #EAE8FD;
  font-weight: 500;

  p.text {
    opacity: 0;
    transition: opacity 0.3s;
    ${SideBar}:hover & {
      opacity: 1;
    }
  }
`;

const Logotipo = styled.img`
  height: 40px;
  width: 40px;
`;

const FeedContainer = styled.div`
 
  display: flex;
  flex-direction: column;
  align-items: center;
  // gap: 10px;
  background-color: #EAE8FD;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  // border-radius: 20px;
`;

const Icon = styled.span`
  height: 30px;
  width: 30px;
  color: #EAE8FD;
  opacity: 1;
`;

const ContainerBotao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25em;
  margin-top: auto;
  padding-bottom: 1em;
`;

const Botao = styled.button`
  display: flex;
  align-items: center;
  width: 90%;
  background-color: #423fa6;
  color: white;
  border: 1px solid black;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    background-color: rgb(129, 125, 233);
  }

  span.text {
    opacity: 0;
    transition: opacity 0.3s;
    ${SideBar}:hover & {
      opacity: 1;
    }
  }
`;

const BotaoIcon = styled.span`
  display: flex;
  align-items: center;
  height: 30px;
  width: 30px;
`;

function Perfis(props) {
  let navigate = useNavigate();

  function MarcarPagina(e) {
    if (e.target.tagName === 'ICON') return;

    const Menu = [...document.querySelector('ul').children];
    Menu.forEach((el) => {
      el.classList.remove('marcados');
    });

    e.target.classList.add('marcados');
  }

  function Logout() {
    sessionStorage.removeItem('token');
    navigate('/');
  }

  return (
    <>
      <Main>
        <SideBar>
          <LogoContainer>
            <Logotipo src="LogoICO.ico" />
            <p className='text'>CIHP</p>
          </LogoContainer>
          <MenuLateral>
            <OpcLateral className="opcao" onClick={(evt) => { MarcarPagina 
            (evt); 
            navigate('/voluntario')    
            }} showText>
              <Icon className="material-symbols-outlined">person</Icon>
              <span className="text">{props.opcao1}</span>
            </OpcLateral>
            <OpcLateral className="opcao" onClick={(evt) => { MarcarPagina(evt); 
                navigate('/trabalhos')
            }} showText>
              <Icon className="material-symbols-outlined">work_history</Icon>
              <span className="text">{props.opcao2}</span>
            </OpcLateral>
            <OpcLateral className="opcao" onClick={(evt) => { MarcarPagina(evt); 
                navigate('/vagas')
            }} showText>
              <Icon className="material-symbols-outlined">trophy</Icon>
              <span className="text">{props.opcao3}</span>
            </OpcLateral>
            <OpcLateral className="opcao" onClick={(evt) => { MarcarPagina(evt); }} showText>
              <Icon className="material-symbols-outlined">badge</Icon>
              <span className="text">{props.opcao4}</span>
            </OpcLateral>
          </MenuLateral>
          <ContainerBotao>
            <Botao onClick={() => { Logout(); }}>
              <BotaoIcon className="material-symbols-outlined">logout</BotaoIcon>
              <span className='text'>Sair</span>
            </Botao>
            <Botao>
              <BotaoIcon className="material-symbols-outlined">delete</BotaoIcon>
              <span className='text'>Excluir conta</span>
            </Botao>
          </ContainerBotao>
        </SideBar>
        <FeedContainer>
          <Outlet />
        </FeedContainer>
      </Main>
    </>
  );
}

export default Perfis;