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
import ONGtrabalho from './pages/ONGtrabalho';
import PublicarVagas from './pages/publicarVagas';
import PaginaInscricao from './pages/PaginaInscricao';
import EmpresaTrabalho from './pages/EmpresaTrabalho';

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
          <Route path='/Inscricao' element={<PaginaInscricao/>}/>

          <Route path='/voluntario' element={<Perfis opcao1='Perfil' opcao2='Trabalhos' opcao3='Prêmios recebidos' opcao4='Vagas' rota='/voluntario/' icons='person,work_history,trophy'/>}>
              <Route index element={<VolunteerProfile />} />
              <Route path='trabalhos' element={<VolunteerTrabalhos rota='voluntario'/>} />
          </Route> 
          
          <Route path='/Instituicao' element={<Perfis opcao1='perfil' opcao2='publicar vagas'  opcao3='trabalhos' rota='/Instituicao/' icons='person,post_add,work_history,'/>}>
              <Route index element={<OngProfile/>}/>
              <Route path='trabalhos'  element={<ONGtrabalho rota='Instituicao'/>} />
              <Route path='publicar vagas' element={<PublicarVagas/>} />
          </Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
