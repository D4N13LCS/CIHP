import styled from 'styled-components';

const ProfileContainer =  styled.div`
    display: flex;
    align-items: center;
    gap: 2em;
`

const FeedContainerImg = styled.section`
    display: flex;
    align-items: center;
    justify-content: center; 
    gap: 2em;
    height: fit-content;
    width: 100%;
    padding: 10px;
    margin-bottom: 1.5em;

    @media screen and (max-width: 360px){
        gap: 0em;    
        flex-wrap: wrap;
        justify-content: start; 
    }
    @media screen and (min-width: 361px) and (max-width: 500px){
        gap: 0em;    
        flex-wrap: wrap;
        justify-content: start; 
    }
    @media screen and (min-width: 501px) and (max-width: 768px){
        
    }
    @media screen and (min-width: 769px) and (max-width: 1024px){
        
    }
    @media screen and (min-width: 1025px) and (max-width: 1300px){
        
    }
    @media screen and (min-width: 1301px){
        
    }
`

const FundoImg = styled.div`
    height: 80px;
    width: 80px;
    border-radius: 50%;
    background-image: url("https://wallpapers.com/images/hd/camera-icon-simple-black-1gsn4ep2gufyauuq.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; 

    @media screen and (max-width: 360px){
        height: 30px;
        width: 30px;
    }
    @media screen and (min-width: 361px) and (max-width: 500px){
        height: 40px;
        width: 40px;
    }
    @media screen and (min-width: 501px) and (max-width: 768px){
        height: 65px;
        width: 65px;
    }
    @media screen and (min-width: 769px) and (max-width: 1024px){
        
    }
    @media screen and (min-width: 1025px) and (max-width: 1300px){
        
    }
    @media screen and (min-width: 1301px){
        
    }
`

const FeedImg = styled.img`
    
    height: 80px;
    width: 80px;
    position: relative;
    &:hover{
        cursor:pointer;
        opacity: 0%;
        transition: 200ms ease-in-out;
    }

    @media screen and (max-width: 360px){
        height: 30px;
        width: 30px;
    }
    @media screen and (min-width: 361px) and (max-width: 500px){
        height: 40px;
        width: 40px;
    }
    @media screen and (min-width: 501px) and (max-width: 768px){
        height: 65px;
        width: 65px;
    }
    @media screen and (min-width: 769px) and (max-width: 1024px){
        
    }
    @media screen and (min-width: 1025px) and (max-width: 1300px){
        
    }
    @media screen and (min-width: 1301px){
        
    }
`

const InfoContainer = styled.div`
    display: flex;
    
    justify-content: center; 
    align-items: center;
    gap: 2.2em;
`

const Info = styled.div`
    
    display: flex;
    flex-direction: column;
`
const InfoTitle = styled.h1`
    
    font-size: 1.5em;
    text-align: center;

    @media screen and (max-width: 360px){
        font-size: 0.9em;
    }
    @media screen and (min-width: 361px) and (max-width: 500px){
        font-size: 1em;
    }
    @media screen and (min-width: 501px) and (max-width: 768px){
        font-size: 1.2em;
    }
    @media screen and (min-width: 769px) and (max-width: 1024px){
        
    }
    @media screen and (min-width: 1025px) and (max-width: 1300px){
        
    }
    @media screen and (min-width: 1301px){
        
    }
    
`

const InfoItem = styled.p`
    text-align: center;

    @media screen and (max-width: 360px){
        font-size: 0.6em;
    }
    @media screen and (min-width: 361px) and (max-width: 500px){
        font-size: 0.7em;
    }
    @media screen and (min-width: 501px) and (max-width: 768px){
        font-size: 0.8em;
    }
    @media screen and (min-width: 769px) and (max-width: 1024px){
        
    }
    @media screen and (min-width: 1025px) and (max-width: 1300px){
        
    }
    @media screen and (min-width: 1301px){
        
    }
`

const EditButton = styled.button`
    height: 35px;
    
    color: #B1AEF2;
    border: 1px solid  #B1AEF2;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        background-color: #423FA6;
        color: white;
    }
    
    @media screen and (max-width: 360px){
        height: 25px;
        font-size: 0.8em;
        width: 100%;
    }
    @media screen and (min-width: 361px) and (max-width: 500px){
        height: 28px;
        font-size: 0.8em; 
    }
    @media screen and (min-width: 501px) and (max-width: 768px){
        
    }
    @media screen and (min-width: 769px) and (max-width: 1024px){
        
    }
    @media screen and (min-width: 1025px) and (max-width: 1300px){
        
    }
    @media screen and (min-width: 1301px){
        
    }
`

const LocationField = styled.div`
    display: flex;
    
    align-items: center;
    width: 535px;
    gap: 1em;
    border-radius: 10px;
    border: 1px solid rgb(0, 0, 0, 0.1);
    padding: 10px;
    margin-bottom: 5em;

    @media screen and (max-width: 360px){
        width: 220px;
    }
    @media screen and (min-width: 361px) and (max-width: 500px){
        width: 290px;
    }
    @media screen and (min-width: 501px) and (max-width: 768px){
        width: 400px;
    }
    @media screen and (min-width: 769px) and (max-width: 1024px){
        
    }
    @media screen and (min-width: 1025px) and (max-width: 1300px){
        
    }
    @media screen and (min-width: 1301px){
        
    }
`

const TextArea = styled.textarea`
    width: 100%;
    height: 220px;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    font-size: 1em;
`;

const TextAreaContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
`;

const H1 = styled.h1`
    align-self: start;
    padding-left: 10px;
    font-size: 1em;
`

const H2 = styled.h2`
    align-self: start;
    padding-left: 10px;
    font-size: 0.8em;
    color: rgb(0, 0, 0, 0.4)
`

const H1andH2area = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;


`

const PreferencesContainer = styled.div`
    display: flex;
    align-items: start;
    gap: 3em;
`

const PreferencesSection = styled.section`
    
`

const PreferencesTitle = styled.h2`
    font-size: 1em;
    color:rgb(140, 137, 250);
    font-weight: 500;
`

const PreferencesCampo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.3em;
`

const CheckLabel = styled.label`
    color: rgb(178, 175, 252);   
`

const PreferencesCheck = styled.input`
    
`

const PreferencesBotao = styled.button`
    border-radius: 4px;
    border: 1px solid #6941C6;

    &:hover{
        background-color: #6941C6;
    }
`

function EmpresaProfile(){
    return (
        <>
            
            
            <FeedContainerImg>
                <ProfileContainer>
                <FundoImg>
                    <FeedImg src='https://cdn-icons-png.flaticon.com/512/10542/10542486.png'/>
                </FundoImg>
                <InfoContainer>
                    <Info>
                        <InfoTitle>Empresa</InfoTitle>
                        <InfoItem>Los Bolsonaros</InfoItem>
                    </Info>
                    <Info>
                        <InfoTitle>Email</InfoTitle>
                        <InfoItem>bolzonario@gmail.com</InfoItem>
                    </Info>
                </InfoContainer>
                </ProfileContainer>
                
                <EditButton>Editar</EditButton>
            </FeedContainerImg>
            
            
            <LocationField>
                <TextAreaContainer>
                    <H1andH2area>
                        <H1>Objetivo</H1>
                        <H2>Objetivo da EMPRESA</H2>
                    </H1andH2area>
                    <TextArea placeholder='Escreva sua bio aqui...' />
                </TextAreaContainer>
            </LocationField>
            
            
            
            
        </>
    )
}

export default EmpresaProfile;