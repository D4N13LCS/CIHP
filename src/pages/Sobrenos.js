import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from "../components/Navbar";

const PageContainer = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;


`;

const Header = styled.header`

`;

const Footer = styled.footer`
  background-color: #423FA6;
  color: white;
  text-align: center;
  padding: 15px;
  margin-top: auto;
`;

const Content = styled.main`
  padding: 40px 20px;
  background-color:rgb(228, 228, 228);
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  position: relative;

  
`;

const TextSection = styled.div`
  flex: 1;
  min-width: 300px;
  padding-right: 20px;
  margin-left: 30px;
`;

const Title = styled.h2`
  color: #333;
  font-size: 2rem;
  margin-bottom: 20px;
  font-family: 'Merriweather', serif;
  border-bottom: 2px solid rgb(46, 42, 73);
  display: inline-block;
  padding-bottom: 1px;
  
  &:hover {
  color: rgb(78, 40, 109);
    border-bottom: 2px solid rgb(78, 40, 109);
  }

`;

const Text = styled.p`
  color: rgb(72, 65, 73);
  font-size: 1rem;
  line-height: 1.6;
`;

const VerticalCards = styled.div`
  display: flex;
  gap: 20px;
  flex: 1;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const Card = styled.div`
  width: 120px;
  height: 300px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  writing-mode: vertical-lr;
  text-orientation: upright;
  font-size: 30px;
  font-weight: bold;
  color: white;
  text-shadow: 0px 1px 4px rgba(0,0,0,0.8);
  background-image: url('https://cdn.pixabay.com/photo/2019/11/11/09/40/black-sea-4617810_1280.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }


`;

const Card1 = styled(Card)` background-position: left center; margin-top: -30px; `;
const Card2 = styled(Card)` background-position: center center; margin-top: 30px; `;
const Card3 = styled(Card)` background-position: right center; margin-top: -30px;`;

const aboutContent = {
  default: {
    title: "Sobre Nós",
    text: ` O voluntariado é essencial para o desenvolvimento da sociedade, através disso criamos essa plataforma com visão de facilitar e promover a participação voluntária da cidade de maricá.Com uma interface intuitiva e recursos direcionados para conectar voluntários e organizações de forma eficiente e segura.`
  },
  Missão: {
    title: "Missão",
    text: "Trazemos a proposta do aumento de engajamento cívico na cidade de Maricá, buscando promover uma maior soliedariedade na cidade."
  },
  Visão: {
    title: "Visão",
    text: "Buscamos ser um grande servidor de voluntariado em marica, uma grande referência dentro da comunidade.   "    
  },
  Valores: {
    title: "Valores",
    text: "Honestidade, solidariedade, empatia e respeito."
  }
};

const AboutPage = () => {
  const [selected, setSelected] = useState("default");
  const cardsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardsRef.current && !cardsRef.current.contains(event.target)) {
        setSelected("default");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const { title, text } = aboutContent[selected];

  return (
    <PageContainer>
      <Header>
        <Navbar />
      </Header>

      <Content>
        <TextSection>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </TextSection>

        <VerticalCards ref={cardsRef}>
          <Card1 onClick={() => setSelected("Missão")} active={selected === "Missão"}>Missão</Card1>
          <Card2 onClick={() => setSelected("Visão")} active={selected === "Visão"}>Visão</Card2>
          <Card3 onClick={() => setSelected("Valores")} active={selected === "Valores"}>Valores</Card3>
        </VerticalCards>
      </Content>

      <Footer>
        © 2025 CIHP - Todos os direitos reservados.
      </Footer>
    </PageContainer>
  );
};

export default AboutPage;