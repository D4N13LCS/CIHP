import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #f2f2dc;
  &:hover {
    color: #ffffff;
    text-decoration: underline;
  }
`;

function Footer(){
    return(
        <footer className="f-color text-light pt-5 pb-3" style={{backgroundColor: "#423FA6"}}>
        <div className="container">
        <div className="row">
        <div className="col-md-2 mb-3">
            <h5>Institucional</h5>
            <ul className="nav flex-column">
            <li className="nav-item mb-2"><StyledLink to="#">Quem somos</StyledLink></li>
            <li className="nav-item mb-2"><StyledLink to="#">Missão</StyledLink></li>
            <li className="nav-item mb-2"><StyledLink to="#">Visão</StyledLink></li>
            <li className="nav-item mb-2"><StyledLink to="#">Valores</StyledLink></li>
            <li className="nav-item mb-2"><StyledLink to="#">Contato</StyledLink></li>
            </ul>
        </div>

        <div className="col-md-2 mb-3">
            <h5>Serviços</h5>
            <ul className="nav flex-column">
            <li className="nav-item mb-2"><StyledLink to="#">Consultoria</StyledLink></li>
            <li className="nav-item mb-2"><StyledLink to="#">Cursos</StyledLink></li>
            <li className="nav-item mb-2"><StyledLink to="#">Eventos</StyledLink></li>
            <li className="nav-item mb-2"><StyledLink to="#">Parcerias</StyledLink></li>
            </ul>
        </div>

        <div className="col-md-2 mb-3">
            <h5>Ajuda</h5>
            <ul className="nav flex-column">
            <li className="nav-item mb-2"><StyledLink to="#">FAQ</StyledLink></li>
            <li className="nav-item mb-2"><StyledLink to="#">Termos de Uso</StyledLink></li>
            <li className="nav-item mb-2"><StyledLink to="#">Política de Privacidade</StyledLink></li>
            <li className="nav-item mb-2"><StyledLink to="#">Fale Conosco</StyledLink></li>
            </ul>
        </div>
  
            <div className="col-md-4 offset-md-1 mb-3">
              <form>
                <h5>Fique por dentro de nossas notícias</h5>
                <p>Mensalmente estaremos te atulizando com várias notícias.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Endereço de e-mail"	
                    aria-label="Endereço de e-mail"
                  />
                  <button className="btn btn-primary" type="submit">Enviar</button>
                </div>
              </form>
            </div>
          </div>
  
          <div className="d-flex justify-content-between pt-4 mt-4 border-top">
            <p>© 2025 CIHP. Todos os direitos reservados.</p>
            <ul className="list-unstyled d-flex gap-3">
             <li><a href="#"><i className="bi bi-instagram fs-5 text-light"></i></a></li>
             <li><a href="#"><i className="bi bi-facebook fs-5 text-light"></i></a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  };

export default Footer;