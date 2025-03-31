import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import VolunteerProfile from './pages/volunteerProfile';
import VolunteerTrabalhos from './pages/VolunteerTrabalhos';
import OngProfile from './pages/OngProfile';
import Home from './pages/Home';
import FullVagas from './pages/FullVagas';
import LoginVoluntario from './pages/LoginVoluntario';
import LoginEmpresa from './pages/LoginEmpresa';
import LoginONG from './pages/LoginONG';
import SignupVoluntario from './pages/SignupVoluntario';
import SignupEmpresa from './pages/SignupEmpresa';
import SignupONG from './pages/SignupONG';
import Perfis from './layouts/perfis';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/' element={<Perfis opcao1='Perfil' opcao2='Trabalhos' opcao3='Prêmios recebidos' opcao4='Vagas'/>}>
              <Route path='voluntario' index element={<VolunteerProfile />} />
              <Route path='trabalhos' element={<VolunteerTrabalhos />} />
              
          </Route> 
          <Route path='/ONG' element={<OngProfile/>}/>
          <Route path='/Vagas' element={<FullVagas/>}/>
          <Route path='/LoginVoluntario' element={<LoginVoluntario/>}/>
          <Route path='/LoginEmpresa' element={<LoginEmpresa/>}/>
          <Route path='/LoginONG' element={<LoginONG/>}/>
          <Route path='/SignupVoluntario' element={<SignupVoluntario/>}/>
          <Route path='/SignupEmpresa' element={<SignupEmpresa/>}/>
          <Route path='/SignupONG' element={<SignupONG/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
