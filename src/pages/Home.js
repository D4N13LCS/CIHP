import styled from "styled-components";
import Navbar from "../components/Navbar";

import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import VagasPopulares from "../components/VagasPopulares";

function Home(){
    return (
        <>
            <Navbar />
            <Carousel/>
            <VagasPopulares/>
            <Footer/>
        </>
    )
}

export default Home;