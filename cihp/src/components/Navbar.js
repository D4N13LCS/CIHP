import styled from 'styled-components';
import logo from '../assets/IMGS/LogoPNG.png';
import MenuDropDown from './MenuDropDown';

const Nav = styled.nav`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #D8D9D7;
    background-color: white;
`

const Img = styled.img`
    height: 55px;
    width: 55px;
`

const UL = styled.ul`
    display: none;
    width: 100%;
    justify-content: space-evenly;
    list-style: none;
`

const LI = styled.li`
    font-weight: 600;
    color: gray;
    &:hover{
        cursor: pointer;
        color: #8784D9;
    }
    
`

const Div = styled.div`
    display: flex;
    align-items: center;
    font-family: sans-serif;
    font-weight: 600;
    color: #423FA6;
`

function Navbar({opcao1, opcao2, opcao3, opcao4}){
    return (
        <Nav>
            <Div><Img src={logo}/> CIHP</Div>
            <UL>
                <LI>
                    {opcao1}
                </LI>
                <LI>
                    {opcao2}
                </LI>
                <LI>
                    {opcao3}
                </LI>
                <LI>
                    {opcao4}
                </LI>
            </UL>
            <MenuDropDown/>
        </Nav>
    )
}

export default Navbar;