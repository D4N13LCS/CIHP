import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Linkedin from '../assets/IMGS/linkedin.svg';
import Insta from '../assets/IMGS/insta.svg';
import Wpp  from '../assets/IMGS/wpp.svg';

const FOOTER = styled.footer`
    display: flex;
    flex-direction: column;
    align-items:center;
    background-image: linear-gradient(to top,  #423FA6, #8784D9, #B1AEF2);
    margin-top: 2.5em;
    padding: 1em;
`

const Redes = styled.div`
    display:flex;
    align-items: center;
`

const Icon = styled.img`
    width: 45px;
    color: white;
    &:hover{
        cursor: pointer;
    }
`

const Conteudo = styled.div`
    display: flex;
    align-items: end;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 2em;
`

const Users = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
`

const UserOpt = styled.li`
    color: #F2F2DC;
`

const Copy = styled.div`

    color: #F2F2DC;
    &::after{
        position: relative;
        bottom: 1.5px;
        content: '2024 cihp';
        font-size: 12px;
        color: #F2F2DC;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
`

function Footer(){
    return(
        <>
            <FOOTER>
                <Conteudo>
                    <Users>
                        <UserOpt>
                            <StyledLink to='/LoginEmpresa'>Para Empresas parceiras</StyledLink>
                        </UserOpt>
                        <UserOpt>
                            <StyledLink to='/LoginONG'>Para ONGs</StyledLink>
                        </UserOpt>
                    </Users>
                    <Users>
                        <UserOpt>
                            Termos de privacidade
                        </UserOpt>
                        <UserOpt>
                            Sobre nós
                        </UserOpt>
                    </Users>
                    <Redes>
                        <Icon id='lkd' src={Linkedin}/>
                        <Icon  id='inst' src={Insta}/>
                        <Icon  id='wp' src={Wpp}/>
                    </Redes>
                </Conteudo>
                <Copy>&copy;</Copy>
            </FOOTER>
        </>
    )
}

export default Footer;