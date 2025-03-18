import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em;
    width: 100%;
`

const WelcomeBox = styled.div`
    displaY: flex;
    flex-direction: column;
    gap: 0.7em;
    border-right: 1px;
    border-color: #B1AEF2;
`

const TitleWelcome = styled.h1`
    text-align: center;
    color: #423FA6;
`

const WelcomeMessage = styled.p`
    text-align: justify;
    color:rgba(156, 152, 152, 0.31);
`

const WelcomeImg = styled.img`
    width: 100%;
    height: 300px;
`

const LoginBox = styled.div`
    background-color: #423FA6;
    height: 400px;
    width: 400px;
`

const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.6em;
`

const ContainerCampo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const CampoIcon = styled.span`
    height: 0.3em;
    width: 0.3em;
    color: white;
`
const Campo = styled.input`
    border-radius: 10px;
    padding: 0.12em;

`

const Entrar = styled.button`
    justify-self: end;
    border: 1px solid #B1AEF2;
    border-radius: 12px;
    padding: 4px;
    color: rgba(156, 152, 152, 0.31);
`

function Login(){
    return(
        <>
            <Container>
                <WelcomeBox>
                    <TitleWelcome>Seja bem vindo</TitleWelcome>
                    <WelcomeMessage>Transforme seu tempo em impacto</WelcomeMessage>
                    <WelcomeImg src="https://img.freepik.com/vetores-gratis/pessoas-voluntarias-e-doando-dinheiro-e-itens_53876-64647.jpg?t=st=1734662248~exp=1734665848~hmac=9a6d6e233bfb621116cb2084781201f377a752c6d915c1c56f7256f17adff7f5&w=740"/>
                </WelcomeBox>
                <LoginBox>
                    <FormLogin>
                        <ContainerCampo>
                            <CampoIcon className='Material-Symbols-Outlined'>
                                account_circle
                            </CampoIcon>
                            <Campo placeholder='Insira seu usuário'></Campo>
                        </ContainerCampo>
                        <ContainerCampo>
                            <CampoIcon className='Material-Symbols-Outlined'>
                                lock
                            </CampoIcon>
                            <Campo placeholder='Insira sua senha'></Campo>
                        </ContainerCampo>
                        <Entrar>Entrar</Entrar>
                    </FormLogin>
                </LoginBox>
            </Container>
        </>
    )
}

export default Login;