import {Link} from 'react-router-dom';
import styled from "styled-components";
import Searchbar from "../components/Searchbar";
import Filter from "../components/Filter";

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 5px 10px -8px black;
    padding: 20px 0px;
`

const Title = styled.h1`
    color: #8784D9;
    
`

const Setinha = styled.div`
    position: relative;
    top: 3px;
    z-index: -1;
    &:hover{
        cursor: pointer;
    }
    &::before{
        position: relative;
        top: -2px;
        content: 'Veja mais vagas';
        font-size: 0.7em;
        margin-left: 20px;
        margin-right: 5px;  
        cursor: pointer;
        color: black;
    }
`

const ContainerVagas = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1em;
    padding: 3em;
`

const Vaga = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4em;
    height: 400px;
    overflow-y: hidden;
    width: 200px;
    border: 1px solid #423FA6;
    border-radius: 10px;
    box-shadow: 1px 1px 3px -1px black;
`

const ImgVaga = styled.img`
    width: 100%;
    height: 200px;
    border-radius: 10px 10px 0px 0px;
`

const InfoVaga  = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4em;
    
`

const TitleVaga = styled.h1`
    text-align: center;
    color: #8784D9;
`
const DescricaoVaga = styled.p`
    padding: 10px;
    text-align: justify;
    color: black;
    
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1em;
    margin-top: 3em;
    width: 100%;
`

const LinkStyled = styled(Link)`
    text-decoration: none;
`

function VagasPopulares(){
    return(
        <>
            <TitleContainer>
                <Title>Vagas Populares </Title><LinkStyled to='/Vagas'><Setinha>&rarr;</Setinha></LinkStyled>
            </TitleContainer>
            <ContainerVagas>
                <Searchbar/>
                <Filter/>
                <Container>
                    <Vaga>
                        <ImgVaga src='https://img.freepik.com/vetores-gratis/pessoas-sem-teto_98292-2884.jpg?t=st=1732598331~exp=1732601931~hmac=2cafe56f332889fbdcf76af2c1468b5e8acc662f1e2cc80cb71c2a4b70978abf&w=740'/>
                        <InfoVaga>
                            <TitleVaga>Doação</TitleVaga>
                            <DescricaoVaga>Necessita-se de um zelador para tomar conta de crianças viciadas em cachaça</DescricaoVaga>
                        </InfoVaga>
                    </Vaga>
                    <Vaga>
                        <ImgVaga src='https://img.freepik.com/vetores-gratis/ilustracao-de-espirito-comunitario-desenhada-a-mao_23-2150188726.jpg?t=st=1732598682~exp=1732602282~hmac=5f6d460eb564a008c473b34420254182f1d57eee8d752a280da50b7d8adda2bd&w=740'/>
                        <InfoVaga>
                            <TitleVaga>Reflorestamento</TitleVaga>
                            <DescricaoVaga>Necessita-se de um zelador para tomar conta de crianças viciadas em cachaça</DescricaoVaga>
                        </InfoVaga>
                    </Vaga>
                    <Vaga>
                        <ImgVaga src='https://img.freepik.com/vetores-gratis/conceito-de-reciclagem-de-pessoas_52683-37055.jpg?t=st=1732599897~exp=1732603497~hmac=f5e2526274832e8b9d63316257292551bb328454a05edfcf0ce77df41d9287e1&w=740'/>
                        <InfoVaga>
                            <TitleVaga>Reciclagem</TitleVaga>
                            <DescricaoVaga>Necessita-se de um zelador para tomar conta de crianças viciadas em cachaça</DescricaoVaga>
                        </InfoVaga>
                    </Vaga>
                    <Vaga>
                        <ImgVaga src='https://img.freepik.com/vetores-gratis/voluntarios-ajudando-idosos_23-2148571216.jpg?t=st=1732600060~exp=1732603660~hmac=87b901ecbe4bc859de5968f235623afc587b714385d7ec4d09c16d0f811ed6db&w=740'/>
                        <InfoVaga>
                            <TitleVaga>Cuidado de idosos</TitleVaga>
                            <DescricaoVaga>Necessita-se de um zelador para tomar conta de crianças viciadas em cachaça</DescricaoVaga>
                        </InfoVaga>
                    </Vaga>
                    <Vaga>
                        <ImgVaga src='https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-aprendizagem_114360-6186.jpg?t=st=1734321409~exp=1734325009~hmac=00514a5fb242670dbf178c2cc72afc233da4b797ca062fe35c4f5c01a9c94691&w=740'/>
                        <InfoVaga>
                            <TitleVaga>Ensino nas favelas</TitleVaga>
                            <DescricaoVaga>Necessita-se de um zelador para tomar conta de crianças viciadas em cachaça</DescricaoVaga>
                        </InfoVaga>
                    </Vaga>
                    <Vaga>
                        <ImgVaga src='https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-dia-para-deficientes-fisicos_114360-4000.jpg?t=st=1734321585~exp=1734325185~hmac=4c8df7ff5810add17b6d087918034f592a18ef65f7730d93d6af1ac220793443&w=740'/>
                        <InfoVaga>
                            <TitleVaga>Reabilitação para PCDs</TitleVaga>
                            <DescricaoVaga>Necessita-se de um zelador para tomar conta de crianças viciadas em cachaça</DescricaoVaga>
                        </InfoVaga>
                    </Vaga>
                </Container>
            </ContainerVagas>
        </>
    )
}

export default VagasPopulares;