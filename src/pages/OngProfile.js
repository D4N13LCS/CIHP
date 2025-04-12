import styled from 'styled-components';

const ProfileContainer =  styled.div`
    display: flex;
    flex-direction: column;
    align-items:
`

const FeedContainerImg = styled.section`
    display: flex;
    
    align-items: center;
    justify-content: center; 
    gap: 2em;
    height: 100px;
    width: 100%;
    padding: 10px;
`

const FundoImg = styled.div`
    height: 80px;
    width: 80px;
    border-radius: 50%;
    background-image: url("https://wallpapers.com/images/hd/camera-icon-simple-black-1gsn4ep2gufyauuq.jpg");
    background-position: center;
    bakcground-repeat: no-repeat;
    background-size: cover; 
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
    
`

const InfoItem = styled.p`
    
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
`

const LocationField = styled.div`
    display: flex;
    
    align-items: center;
    
    gap: 1em;
    border-radius: 10px;
    border: 1px solid rgb(0, 0, 0, 0.1);
    height: 300px;
    width: fit-content;
   

    // width: 90%;
    padding: 10px;
    margin-bottom: 5em;
`

const TextArea = styled.textarea`
    width: 500px;
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
    width: fit-content;
`;

const InputLoc = styled.input`
    border-radius: 5px;
    height: 25px;
    width: 250px;
    
`

const H1 = styled.h1`
    align-self: start;
    padding-left: 30px;
    font-size: 1em;
`

const H2 = styled.h2`
    align-self: start;
    padding-left: 30px;
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

function VolunteerProfile(){
    return (
        <>
            
            
            <FeedContainerImg>
                <FundoImg>
                    <FeedImg src='https://cdn-icons-png.flaticon.com/512/10542/10542486.png'/>
                </FundoImg>
                <InfoContainer>
                    <Info>
                        <InfoTitle>Nome da ONG</InfoTitle>
                        <InfoItem>Guerreiros da Pátria</InfoItem>
                    </Info>
                    <Info>
                        <InfoTitle>Email</InfoTitle>
                        <InfoItem>patriotinhas@gmail.com</InfoItem>
                    </Info>
                </InfoContainer>
                <EditButton>Editar</EditButton>
            </FeedContainerImg>
            
            
            <LocationField>
                <TextAreaContainer>
                    <H1andH2area>
                        <H1>Objetivo</H1>
                        <H2>Objetivo da ONG</H2>
                    </H1andH2area>
                    <TextArea placeholder='Escreva sua bio aqui...' />
                </TextAreaContainer>
            </LocationField>
            
            
            
            
        </>
    )
}

export default VolunteerProfile;