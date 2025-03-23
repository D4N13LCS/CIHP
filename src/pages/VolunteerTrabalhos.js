import styled from 'styled-components';


const FeedContainerImg = styled.section`
    display: flex;
    align-items: center;
    justify-content: center; 
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


const InfoItem = styled.p`
    
    
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
                
            </FeedContainerImg>
         
            <InfoContainer>
                <H1>Trabalhos concluídos</H1>
                <Info>
                    
                </Info>

            </InfoContainer>
           
        </>
    )
}

export default VolunteerProfile;