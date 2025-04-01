import styled from 'styled-components'
import {useState, useEffect} from 'react';

const images = [
    require('../assets/IMGS/cardImage1.jpg'),
    require('../assets/IMGS/cardImage2.jpg'),
    require('../assets/IMGS/cardImage3.jpg'),
    require('../assets/IMGS/cardImage4.jpg'),
    require('../assets/IMGS/cardImage5.jpg'),
    require('../assets/IMGS/cardImage6.jpg'),
    require('../assets/IMGS/FotoVolun1.2.png'),
    require('../assets/IMGS/FotoVolun2.2.png'),
    require('../assets/IMGS/FotoVolun3.2.png')
];

const ContainerCarrossel = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Seta = styled.span`
    font-size; 0.8em;
    cursor: pointer;
`

const ContainerCards = styled.div`
    display: flex;
    gap: 2em;
`

const Div = styled.div`
    // width: 1000px;
    // overflow: hidden;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid black;
    width: 200px;
    box-shadow: 1px 1px 2px 1px rgba(31, 30, 30, 0.46);
    background-color: white;
    opacity: 1;
    .hidden{
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }
`

const CardImage = styled.img`
    height: 115px;
    width: 100%;
`

const CardTitle = styled.h1`
    font-size: 0.9em;
    text-align: center;
`

const CardDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4em;
`

const CardInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.3em;
    padding: 0px 10px;
`

const CardIcon = styled.span`
    font-size: 18px;
`

function Trabalhos(){
    
    const [itens, setItens] = useState(6);
    const [limite, setLimite] = useState(6);

    function avancar(){
        itens >= images.length? setItens(limite): setItens(itens+limite)
    }

    function retroceder(){
        const resto = images.length % itens
        console.log(`resto: ${resto}`)
        console.log(`itens: ${itens}`)
        
        itens <= limite || itens - limite < limite?setItens(images.length + resto):setItens(itens-limite)
        
    }

    function reajustarCarrossel(){
        if (window.innerWidth <= '650'){
            setItens(1)
            setLimite(1)
        }
        else if ('651'<= window.innerWidth & window.innerWidth <= '900'){
            setItens(2)
            setLimite(2)
        }
        else if ('901' <= window.innerWidth & window.innerWidth <= '1100'){
            setItens(3)
            setLimite(3)
        }
        else if('1101' <= window.innerWidth & window.innerWidth <= '1350'){
            setItens(4)
            setLimite(4)
        }
        else if ('1351' <= window.innerWidth & window.innerWidth<= '1500'){
            setItens(5)
            setLimite(5)
        }else{
            setItens(6)
            setLimite(6)
        }

    }

    useEffect(() => {
        reajustarCarrossel(); 
    
        window.addEventListener("resize", reajustarCarrossel);
    
        return () => {
            window.removeEventListener("resize", reajustarCarrossel);
        };

    }, []);

    return(
        <>
            <ContainerCarrossel>
                <Seta className='material-symbols-outlined' onClick={()=>{
                    retroceder()
                }}>
                    arrow_back_IOS
                </Seta>
                <Div>
                <ContainerCards className='cardsContainer'>
                    
                    {images.slice(itens-limite, itens).map((el, i)=>{
                        return <Card key={i}>
                        <CardImage src={el} />
                        <CardTitle>Título {i + 1}</CardTitle>
                        <CardDescription>
                            <CardInfo>
                                <CardIcon className='material-symbols-outlined'>
                                    location_on
                                </CardIcon>
                                Maricá - RJ
                            </CardInfo>
                            <CardInfo>
                                <CardIcon className='material-symbols-outlined'>
                                    category
                                </CardIcon>
                                categoria {i + 1}
                            </CardInfo>
                        </CardDescription>
                    </Card>
                    })}
                    
                </ContainerCards>
                </Div>
                
                <Seta className='material-symbols-outlined' onClick={()=>{
                    avancar()
                    }}>
                    arrow_forward_IOS
                </Seta>
            </ContainerCarrossel>
        </>
    )
}

export default Trabalhos;