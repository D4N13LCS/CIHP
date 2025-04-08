import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import VolunteerProfile from './pages/volunteerProfile';
import VolunteerTrabalhos from './pages/VolunteerTrabalhos';
import VagasVolunteerProfile from './pages/VagasVolunteerProfile'
import OngProfile from './pages/OngProfile';
import Home from './pages/Home';
import LoginVoluntario from './pages/LoginVoluntario';
import LoginEmpresa from './pages/LoginEmpresa';
import LoginONG from './pages/LoginONG';
import SignupVoluntario from './pages/SignupVoluntario';
import SignupEmpresa from './pages/SignupEmpresa';
import SignupONG from './pages/SignupONG';
import Perfis from './layouts/perfis';
import EmpresaProfile from './pages/EmpresaProfile';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
                   
          <Route path='/LoginVoluntario' element={<LoginVoluntario/>}/>
          <Route path='/LoginEmpresa' element={<LoginEmpresa/>}/>
          <Route path='/LoginONG' element={<LoginONG/>}/>
          <Route path='/SignupVoluntario' element={<SignupVoluntario/>}/>
          <Route path='/SignupEmpresa' element={<SignupEmpresa/>}/>
          <Route path='/SignupONG' element={<SignupONG/>}/>


          <Route path='/voluntario' element={<Perfis opcao1='Perfil' opcao2='Trabalhos' opcao3='Prêmios recebidos' opcao4='Vagas' rota='/voluntario/'/>}>
              <Route index element={<VolunteerProfile />} />
              <Route path='trabalhos' element={<VolunteerTrabalhos />} />
              <Route path='vagas' element={<VagasVolunteerProfile />} />
          </Route> 
          
          <Route path='/ONG' element={<Perfis opcao1='perfil' opcao2='trabalhos' opcao3='publicar vagas' opcao4='vagas' rota='/ONG/'/>}>
              <Route index element={<OngProfile/>}/>
          </Route>

          <Route path='/Empresa' element={<Perfis opcao1='perfil' opcao2='trabalhos' opcao3='prêmios concedidos' opcao4='vagas' rota='/Empresa/'/>}>
              <Route index element={<EmpresaProfile/>}/>
          </Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
