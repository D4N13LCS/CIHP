import styled from "styled-components";
import Navbar from "../components/Navbar";

import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import VagasPopulares from "../components/VagasPopulares";

function Home(){
    return (
        <>
            <Navbar opcao1='Sign in' opcao2='Sign Up' opcao3='Causas populares' opcao4='vagas recentes'/>
            <Carousel/>
            <VagasPopulares/>
            <Footer/>
        </>
    )
}

export default Home;