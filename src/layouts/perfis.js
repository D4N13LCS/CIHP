import { useNavigate, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  background-color: #c8c3d2;
  width: 100%;
`;

const SideBar = styled.aside`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 1.1em;
  background-color: #6941C6;
  transition: width 0.3s;
  width: 3em;
  height: 100vh;
  z-index: 1;
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
    display: flex;
    align-items: center;
    height: 100%;
    margin: 0;
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
  background-color: white;
  width: 100%;
  overflow-y: auto;
  height: 100%;
  margin: 0 auto;
  padding-left: 45px;

  &.variant{
    padding-top: 1.5em;
  }

  @media screen and (max-width: 501px){
    padding-left: 30px;
  }
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
  background-color: transparent;
  color: white;
  border: none;
  

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

const Span = styled.span`
   &.marcados {
    color: #CBCBFC;
    font-weight: bold;
  }
`

const FeedContainerImg = styled.section`
    display: flex;
    align-items: center;
    justify-content: end; 
    gap: 2em;
    height: 40px;
    width: 100%;
    padding: 10px;
    // border-bottom: 2px solid #E1E0F4;
    background-color: #6941C6;
`

const FundoImg = styled.div`
    height: 32px;
    width: 32px;
    border-radius: 50%;
    
    background-image: url("https://wallpapers.com/images/hd/camera-icon-simple-black-1gsn4ep2gufyauuq.jpg");
    background-position: center;
    bakcground-repeat: no-repeat;
    background-size: cover; 
`

const FeedImg = styled.img`
    height: 32px;
    width: 32px;
    position: relative;
    &:hover{
        cursor:pointer;
    }
`

function Perfis(props) {
  let navigate = useNavigate();
  const icons = props.icons.split(',')
  

  function MarcarPagina(e) {
    if (e.target.tagName === 'ICON') return;

    const Menu = [...document.querySelectorAll('ul .opcao .text')];
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
            <Logotipo src="../LogoICO.ico" />
            <p className='text'>CIHP</p>
          </LogoContainer>
          <MenuLateral>
            <OpcLateral className="opcao"  showText>
              <Icon className="material-symbols-outlined">person</Icon>
              <Span className="text" onClick={(evt) => { MarcarPagina 
            (evt); 
            navigate(props.rota)    
            }}>{props.opcao1}</Span>
            </OpcLateral>
            <OpcLateral className="opcao" showText>
              <Icon className="material-symbols-outlined">{icons[1]}</Icon>
              <Span className="text" onClick={(evt) => { MarcarPagina(evt); 
                navigate(props.rota + props.opcao2)
            }}>{props.opcao2}</Span>
            </OpcLateral>
            <OpcLateral className="opcao" showText>
              <Icon className="material-symbols-outlined">{icons[2]}</Icon>
              <Span className="text" onClick={(evt) => { MarcarPagina(evt); 
                navigate( props.rota + props.opcao3)
            }}>{props.opcao3}</Span>
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
            <FeedContainerImg>
                <FundoImg>
                    <FeedImg src='https://cdn-icons-png.flaticon.com/512/10542/10542486.png'/>
                </FundoImg>
                
            </FeedContainerImg>
            <FeedContainer className='variant'>
              <Outlet />
            </FeedContainer>
        </FeedContainer>
        
      </Main>
    </>
  );
}

export default Perfis;