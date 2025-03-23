import styled from 'styled-components';

const FeedContainerImg = styled.section`
    display: flex;
    align-items: center;
    gap: 2em;
    height: 100px;
    width: 100%;
    padding: 10px;
    border-bottom: 2px solid #E1E0F4;
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
    gap: 2em;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
`
const InfoTitle = styled.h1`
    font-size: 0.7em;
    tex-align: center;
    
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
    justify-content: center;
    align-items: center;
    gap: 1em;
    border-radius: 10px;
    background-color:rgba(177, 174, 242, 0.56);
    height: 100px;
    width: 90%;
    padding: 10px;
`

const InputLoc = styled.input`
    border-radius: 5px;
    height: 25px;
    width: 250px;
`

const H1 = styled.h1`
    align-self: start;
    padding-left: 20px;
    font-size: 1.35em;
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
                        <InfoTitle>Name</InfoTitle>
                        <InfoItem>Daniel Cardoso</InfoItem>
                    </Info>
                    <Info>
                        <InfoTitle>Email</InfoTitle>
                        <InfoItem>danielmazzini6@gmail.com</InfoItem>
                    </Info>
                </InfoContainer>
                <EditButton>Editar</EditButton>
            </FeedContainerImg>
            <H1>Location</H1>
            <LocationField>
                <InputLoc placeholder='Insira sua localização'>
                </InputLoc>
                <EditButton>Alterar localização</EditButton>
            </LocationField>
           
        </>
    )
}

export default VolunteerProfile;