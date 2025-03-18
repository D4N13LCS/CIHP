import {useState, useEffect} from 'react';
import styled from 'styled-components';
import Foto1 from '../assets/IMGS/FotoVolun1.2.png';
import Foto2 from '../assets/IMGS/FotoVolun2.2.png';
import Foto3 from '../assets/IMGS/FotoVolun3.2.png';


const ContainerCarrosel = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color:rgba(177, 174, 242, 0.46);
    padding-top: 50px;

    
    
`

const ContainerImg = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    padding: 1em;

    
`

const ContainerTxt = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8em;
    @media screen and (max-width: 768px){
       width: 225px;
    }
`

const TitleCarousel = styled.h1`
    color: #423FA6;
`

const TextCarousel = styled.p`
    color:rgb(124, 122, 173);
`

const Span = styled.span`
    display: none;
    color: white;
    background-color:rgba(156, 152, 152, 0.25);
    border-radius: 50%;
    padding: 0.5em;
    &:hover{
        cursor: pointer;
    }

    @media screen and (max-width: 768px){
       
    }
`

const Img = styled.img`
    height: 320px;
    width: 320px;

    @media screen and (max-width: 768px){
        height: 250px;
        width: 250px;
    }
`

function Carousel(props){
    const [dispSeta, alterDispSeta] = useState('none');
    const [ind, alterInd] = useState(0);
    const fotos = [Foto1, Foto2, Foto3];

    function avancar(){
        ind === (fotos.length - 1)? alterInd(0):alterInd(ind+1)
    }

    function retroceder(){
        ind === 0?alterInd(fotos.length-1):alterInd(ind-1)
        
    }

    useEffect(()=>{
        const setas = document.querySelectorAll('.setas');
        setas.forEach((el)=>{el.style.display = dispSeta})
    }, [dispSeta]);

    useEffect(()=>{
        const txt = document.querySelector('p');
        const title = document.querySelector('h1');
        const interval = setInterval(avancar, 3000);
        switch (ind){
            case 0:
                title.innerText = 'Missão'
                txt.innerText = 'Queremos aumentar o engajamento cívico e promover uma maior solidariedade na sociedade'
                break
            case 1:
                title.innerText = 'Visão'
                txt.innerText = 'Queremos ser os maiores servidores de voluntariado do Brasil.'
                break
            case 2:
                title.innerText = 'Valores'
                txt.innerText = 'honestidade, solidariedade, empatia e respeito.'
                break
        }
        return () => clearInterval(interval);
    });

    return (
        <>
            <ContainerCarrosel onMouseLeave={()=>{alterDispSeta('none')}} onMouseEnter={()=>{alterDispSeta('flex')}}>

                <Span onClick={()=>{retroceder()}} className='material-symbols-outlined setas'>
                    arrow_back_IOS
                </Span>
                <ContainerImg>
                    <Img src={fotos[ind]}/>
                    <ContainerTxt>
                        <TitleCarousel>Missão</TitleCarousel>
                        <TextCarousel>
                            Missão
                        </TextCarousel>
                    </ContainerTxt>
                </ContainerImg>
                
                <Span onClick={()=>{avancar()}} className='material-symbols-outlined setas'>
                    arrow_forward_IOS
                </Span>
            </ContainerCarrosel>
        </>
    )
}

export default Carousel;