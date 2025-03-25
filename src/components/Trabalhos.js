import styled from 'styled-components'
import {useState} from 'react';


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
    width: 720px;
    overflow: hidden;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 230px;
    border-radius: 5px;
    border: 1px solid black;
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

    const [index, setIndex] = useState(0);
    const [index2, setIndex2] = useState(0);

    function avancar(indice){
        if (index > 6){
            setIndex(0)
        }
        const cardContainer = document.getElementsByClassName('cardsContainer')[0];
        setIndex(index + 1)        
        
        cardContainer.style.transform = `translateX(${-indice * 690}px)`
    }

    function retroceder(indice){
        if (index < 0){
            setIndex(0)
        }
        const cardContainer = document.getElementsByClassName('cardsContainer')[0];
        setIndex2(index2 - 1)        
        
        cardContainer.style.transform = `translateX(${indice * 690}px)`
    }

    return(
        <>
            <ContainerCarrossel>
                <Seta className='material-symbols-outlined' onClick={()=>{
                    retroceder(index2)
                }}>
                    arrow_back_IOS
                </Seta>
                <Div>
                <ContainerCards className='cardsContainer'>
                    <Card >
                        <CardImage src='https://media.discordapp.net/attachments/1150402175206445058/1353886521287118848/8c79059d2dc843a1951503226baef83c.jpg?ex=67e34894&is=67e1f714&hm=389e4a2265614a2918b792ea21894a4ffb6aabc39e3f504fcfc473602eb12a37&=&format=webp&width=783&height=521'/>
                        <CardTitle>Exemplo</CardTitle>
                        <CardDescription>
                            <CardInfo>
                                <CardIcon className='material-symbols-outlined'>
                                    location_on
                                </CardIcon>
                                Maricá - RJ
                            </CardInfo>
                            <CardInfo >
                                <CardIcon className='material-symbols-outlined'>
                                    category
                                </CardIcon>
                                fdjasdlkafjklsafk
                            </CardInfo>
                            
                           
                        </CardDescription>
                    </Card>
                    <Card >
                        <CardImage src='https://media.discordapp.net/attachments/1150402175206445058/1353886522415382660/ad307ccc96cec341f5ce755335b65876.jpg?ex=67e34894&is=67e1f714&hm=7326d8f8087e3f7639376ae7b27e0aaa898ab01945d6e507c94125ab66052a85&=&format=webp'/>
                        <CardTitle>Exemplo</CardTitle>
                        <CardDescription>
                            <CardInfo>
                                <CardIcon className='material-symbols-outlined'>
                                    location_on
                                </CardIcon>
                                Maricá - RJ
                            </CardInfo>
                            <CardInfo >
                                <CardIcon className='material-symbols-outlined'>
                                    category
                                </CardIcon>
                                rweiooirwepriowp
                            </CardInfo>
                            
                           
                        </CardDescription>
                    </Card>
                    <Card >
                        <CardImage src='https://media.discordapp.net/attachments/1150402175206445058/1353886521631047782/9f5bd151beaa5f9a5081cc0acc661538.jpg?ex=67e34894&is=67e1f714&hm=25137a5cccf6110817d984d843d90d03328b4bdd3d04a060bd8131a394eacab9&=&format=webp'/>
                        <CardTitle>Exemplo</CardTitle>
                        <CardDescription>
                            <CardInfo>
                                <CardIcon className='material-symbols-outlined'>
                                    location_on
                                </CardIcon>
                                Maricá - RJ
                            </CardInfo>
                            <CardInfo >
                                <CardIcon className='material-symbols-outlined'>
                                    category
                                </CardIcon>
                                rweiooirwepriowp
                            </CardInfo>
                            
                           
                        </CardDescription>
                    </Card>
                    <Card >
                        <CardImage src='https://media.discordapp.net/attachments/1150402175206445058/1353886520079028345/9e2168d9c17fa4ca966f86ceb51b83ad.jpg?ex=67e34894&is=67e1f714&hm=8ccb95bab6429c19cf5af753bcae498379b0be7096568ef07a9aac916e2887c8&=&format=webp'/>
                        <CardTitle>Exemplo</CardTitle>
                        <CardDescription>
                            <CardInfo>
                                <CardIcon className='material-symbols-outlined'>
                                    location_on
                                </CardIcon>
                                Maricá - RJ
                            </CardInfo>
                            <CardInfo >
                                <CardIcon className='material-symbols-outlined'>
                                    category
                                </CardIcon>
                                rweiooirwepriowp
                            </CardInfo>
                            
                           
                        </CardDescription>
                    </Card>
                    <Card >
                        <CardImage src='https://media.discordapp.net/attachments/1150402175206445058/1353886522188894262/b90d5f568bbdc17f82ad89a755c4c9f5.jpg?ex=67e34894&is=67e1f714&hm=72fb7087edc83fd2143b15557229fdba17e85e12380d2abad73300853138e4f7&=&format=webp&width=800&height=800'/>
                        <CardTitle>Exemplo</CardTitle>
                        <CardDescription>
                            <CardInfo>
                                <CardIcon className='material-symbols-outlined'>
                                    location_on
                                </CardIcon>
                                Maricá - RJ
                            </CardInfo>
                            <CardInfo >
                                <CardIcon className='material-symbols-outlined'>
                                    category
                                </CardIcon>
                                rweiooirwepriowp
                            </CardInfo>
                            
                           
                        </CardDescription>
                    </Card>
                    <Card >
                        <CardImage src='https://media.discordapp.net/attachments/1150402175206445058/1353887536665198723/5df837d4f6ece2d55c10335b93ad5a98.jpg?ex=67e34986&is=67e1f806&hm=b81941b7be1f4794ca4b6991ec91a9004aaeb4a099ddfbe256377249e1e7c3c0&=&format=webp&width=919&height=613'/>
                        <CardTitle>Exemplo</CardTitle>
                        <CardDescription>
                            <CardInfo>
                                <CardIcon className='material-symbols-outlined'>
                                    location_on
                                </CardIcon>
                                Maricá - RJ
                            </CardInfo>
                            <CardInfo >
                                <CardIcon className='material-symbols-outlined'>
                                    category
                                </CardIcon>
                                rweiooirwepriowp
                            </CardInfo>
                            
                           
                        </CardDescription>
                    </Card>
                </ContainerCards>
                </Div>
                
                <Seta className='material-symbols-outlined' onClick={()=>{
                    avancar(index)
                    }}>
                    arrow_forward_IOS
                </Seta>
            </ContainerCarrossel>
        </>
    )
}

export default Trabalhos;