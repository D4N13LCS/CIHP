import { useNavigate, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.main`
    display: flex;
    justify-content: space-between;
`

const SideBar = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 1.1em;
    background-color: white;
    width: 13em;
    border-radius: 10px 0px 0px 10px;
`

const MenuLateral = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 5px;
    height: 120px;
    list-style-type: none;
    padding: 10px 20px 0px 10px;
`

const OpcLateral = styled.li`
    display: flex;
    padding: 3px;
    width: 100%;
    text-align: left;
    color:rgba(177, 174, 242, 0.49);
    &:hover{
        cursor: pointer;
    }

`

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #D3D2F8;
    color: #423FA6;
    font-weight: 500;
`

const Logotipo = styled.img`
    heigth: 60px;
    width: 60px;
`

const FeedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    gap: 10px;
    background-color: white;
    height: 500px;
    width: fit-content;
    margin-top: 50px;
    border-radius: 20px;
    padding: 15px;
`

const Icon = styled.span`
    height: 30px;
    width: 30px;
    color: #423FA6;
`

const ContainerBotao = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25em;
`

const Botao = styled.button`
    display: flex;
    align-items: center;
    width: 90%;
    background-color: #423FA6;
    color: white;
    border: 1px solid black;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        background-color:rgb(129, 125, 233);
    }
`

const BotaoIcon = styled.span`
    display: flex;
    align-items: center;
    height: 30px;
    width: 30px;
`

function Perfis(props){
    let logout = useNavigate()
    
    function MarcarPagina(e){
        mudarPagina()
        e.target.classList.add('marcado');
    }

    let mudarPagina = ()=>{
        const Menu = [...document.querySelector('ul').children]
        Menu.forEach((el)=>{
            el.classList.remove('marcado');
        })

        document.addEventListener('click', (evt)=>{
            if(!evt.target.classList.contains('opcao')){
                Menu.forEach((el)=>{
                    el.classList.remove('marcado');
                })        
            }
        })
    }

    function Logout(){
        sessionStorage.removeItem('token');
        logout('/')
    }

    return (
        <>
            <Main>
                <SideBar>
                    <LogoContainer>
                        <Logotipo src='LogoICO.ico'/> <p>CIHP</p>
                    </LogoContainer>
                    <MenuLateral>
                        <OpcLateral className='opcao' onClick={(evt)=>{MarcarPagina(evt)}}>
                        <Icon className="material-symbols-outlined">
                            work_history
                        </Icon>
                        {props.opcao1}
                        </OpcLateral>
                        <OpcLateral className='opcao' onClick={(evt)=>{MarcarPagina(evt)}}>
                            <Icon className='material-symbols-outlined'>
                                trophy
                            </Icon>
                            {props.opcao2}
                        </OpcLateral>
                        <OpcLateral className='opcao' onClick={(evt)=>{MarcarPagina(evt)}}>
                            <Icon className='material-symbols-outlined'>
                                badge
                            </Icon>
                            {props.opcao3}
                        </OpcLateral>
                    </MenuLateral>
                        <ContainerBotao>
                            <Botao onClick={()=>{Logout()}}>
                                <BotaoIcon className='material-symbols-outlined'>
                                    logout
                                </BotaoIcon>
                                Sair
                            </Botao>
                            <Botao>
                                <BotaoIcon className='material-symbols-outlined'>
                                    delete
                                </BotaoIcon>
                                Excluir conta
                            </Botao>
                        </ContainerBotao>
                </SideBar>
                <FeedContainer>
                    <Outlet/>
                </FeedContainer>
            </Main>
        </>
    )
}

export default Perfis;