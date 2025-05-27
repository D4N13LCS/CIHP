
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
import AboutPage from './pages/Sobrenos';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
                   
          <Route path='/LoginVoluntario' element={<LoginVoluntario/>}/>
          <Route path='/LoginInstituicao' element={<LoginEmpresa/>}/>
          <Route path='/SignupVoluntario' element={<SignupVoluntario/>}/>
          <Route path='/SignupInstituicao' element={<SignupEmpresa/>}/>
          <Route path='/vagas' element={<VagasVolunteerProfile/>}/>
          <Route path='/sobrenos' element={<AboutPage />} />

          <Route path='/voluntario' element={<Perfis opcao1='Perfil' opcao2='Trabalhos' opcao3='Prêmios recebidos' opcao4='Vagas' rota='/voluntario/' icons='person,work_history,trophy'/>}>
              <Route index element={<VolunteerProfile />} />
              <Route path='trabalhos' element={<VolunteerTrabalhos rota='voluntario'/>} />
          </Route> 


        </Routes>
      </Router>
    </>
  );
}

export default App;

