import {Link} from 'react-router-dom';
import styled from "styled-components";
import Searchbar from "../components/Searchbar";
import Filter from "../components/Filter";
import VolunteerCard from './VolunteerCards';

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
                <Container className='d-flex flex-wrap gap-5'>
                <div className="d-flex flex-wrap gap-5">
                    <VolunteerCard 
                        imageUrl="https://cdn.atarde.com.br/img/Artigo-Destaque/1300000/1200x675/Passageiros-se-jogam-no-chao-de-onibus-para-fugir-0130697600202502121442-9.webp?fallback=https%3A%2F%2Fcdn.atarde.com.br%2Fimg%2FArtigo-Destaque%2F1300000%2FPassageiros-se-jogam-no-chao-de-onibus-para-fugir-0130697600202502121442.png%3Fxid%3D6553913&xid=6553913"
                        location="São Gonçalo, RJ"
                        title="Fugir do Tiroteio ao Som de Sweet Dreams"
                        duration="10 horas"
                        text="SWEET DREAMS ARE MADE OF THIS"
                    />
                    <VolunteerCard 
                        imageUrl="https://www.torneiosdexadrez.com.br/wp-content/uploads/2024/06/idoso-jogando-xadrez-na-praca.png"
                        location="Tangua, RJ"
                        title="Jogar Xadrez com Velhos"
                        duration="2 horas"
                        text="Ganhe o coração dos velhinhos ou um prêmio em dinheiro"
                    />
                    <VolunteerCard 
                        imageUrl="https://ciclovivo.com.br/wp-content/uploads/2024/05/limpeza-praia-Ortobom-ciclovivo-1024x683.jpg"
                        location="Maricá, RJ"
                        title="Limpeza de Praia"
                        duration="2 horas"
                        text="Olá voces são gays? daniel é um viadão monstruoso"
                    />
                </div>
                </Container>
            </ContainerVagas>
        </>
    )
}

export default VagasPopulares;