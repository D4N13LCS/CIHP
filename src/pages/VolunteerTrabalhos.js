import styled from 'styled-components';
import Trabalhos from '../components/Trabalhos.js';
import Status from '../components/Status.js';


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

const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2em;
`

const Info = styled.div`
    display: flex;
    justify-content: center;
`
const Div = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    
    padding: 2.5em 0em 4em 0em;
`


const H1 = styled.h1`
    align-self: start;
    padding-left: 20px;
    font-size: 1.35em;
    color: #423FA6;

    @media screen and (max-width: 360px){
    
    }
    @media screen and (min-width: 361px) and (max-width: 500px){
        align-self: center;
        padding-left: 0px;
    }
    @media screen and (min-width: 501px) and (max-width: 768px){
        align-self: center;
        padding-left: 0px;
    }
    @media screen and (min-width: 769px) and (max-width: 1024px){
    
    }
    @media screen and (min-width: 1025px) and (max-width: 1300px){
    
    }
    @media screen and (min-width: 1301px){

    }
`

function VolunteerProfile(){

    return (
        <>
            <FeedContainerImg>
                <FundoImg>
                    <FeedImg src='https://cdn-icons-png.flaticon.com/512/10542/10542486.png'/>
                </FundoImg>
                
            </FeedContainerImg>
            <Div>
            <InfoContainer>
                <Status trabalhos='20' horas='100' bairros='5'/>
                <H1>Trabalhos concluídos</H1>
                <Info>
                    <Trabalhos/>
                </Info>
                <H1>Trabalhos em andamento</H1>
                <Info>
                    <Trabalhos/>
                </Info>
                

            </InfoContainer>
            </Div>
           
           
        </>
    )
}

export default VolunteerProfile;