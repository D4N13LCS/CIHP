import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Search } from "lucide-react";
import logo from '../assets/IMGS/LogoPNG.png';
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";

const Img = styled.img`
    height: 55px;
    width: 55px;
`



const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="shadow-sm bg-light fixed-top">
      <Container>
        <Navbar.Brand href="#" className="fw-bold fs-3 text-dark"><Img src={logo} />CIHP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className="font-weight-bold text-dark">Causas Populares</Nav.Link>
            <Nav.Link href="#" className="font-weight-bold text-dark">Vagas Recentes </Nav.Link>
            <Nav.Link href="#" className="text-dark">Empresas Cadastradas</Nav.Link>
            <Nav.Link href="#" className="text-dark">Sobre Nós</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center gap-3">
            <Search size={20} className="text-dark" />
            <Button variant="warning" className="fw-bold">Mude o Mundo</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;