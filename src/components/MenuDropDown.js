import { useState } from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const MenuSymbol = styled.span`
    padding-right: 15px;
    &:hover{
        cursor: pointer;
    }
`

const Modal = styled.div`
    display: none;
    justify-content: center;
    background-color: #423FA6;
    width: 100%;
    position: absolute;
    top: 55px;
    z-index: -2;
`

const UL = styled.ul`
    display:flex;
    flex-direction: column;
    gap: 1em;
    list-style-type: none;
    padding: 20px 0px;
`

const LI = styled.li`
    color: white;
    &:hover{
        cursor: pointer;
        color: rgb(220, 218, 250);
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    &:hover{
        cursor: pointer;
        color:rgb(220, 218, 250);
    }
`

function MenuDropDown(props){
    const [status, alterStatus] = useState('close');

    function isOpen(){
        const modal = document.getElementById('modal');
        status === 'close'?alterStatus('menu'):alterStatus('close');
        document.getElementById('menu').innerText = status;
        modal.style.display === 'flex'?modal.style.display='none':modal.style.display='flex';
    }

    return (
        <>
            <MenuSymbol id='menu' className="material-symbols-outlined" onClick={()=>{isOpen()}}>menu</MenuSymbol>
            <Modal id="modal">
                <UL>
                    <LI>
                        <StyledLink to='/LoginVoluntario'>Sign in</StyledLink>
                    </LI>
                    <LI>
                        <StyledLink to='/SignupVoluntario'>Sign Up</StyledLink>
                    </LI>
                    <LI>
                        Causas Populares
                    </LI>
                    <LI>
                        Vagas recentes
                    </LI>
                </UL>
            </Modal>
        </>
    )
}

export default MenuDropDown;