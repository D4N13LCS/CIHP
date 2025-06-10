import React, { useState, useEffect } from "react";
import { Card, Button, Form, InputGroup } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Heart, Search } from "react-feather";
import { useNavigate } from "react-router-dom";

const jobCategories = ["Todas", "Educação", "Saúde", "Meio Ambiente", "Cultura"];
const jobs = [
  {
    id: 1,
    title: "Professor Voluntário",
    category: "Educação",
    location: "Recife, PE",
    description: "Ajude crianças a aprenderem matemática básica.",
    image: "https://f.i.uol.com.br/fotografia/2021/12/02/163847390261a920ae0390c_1638473902_3x2_md.jpg"
  },
  {
    id: 2,
    title: "Apoio Hospitalar",
    category: "Saúde",
    location: "Recife, PE",
    description: "Auxilie no atendimento de pacientes em hospitais.",
    image: "https://static.vecteezy.com/ti/vetor-gratis/p1/11432257-cuidado-voluntariado-apoio-ao-paciente-com-deficiencia-assistencia-hospitalar-cuidados-a-idosos-enfermagem-com-saudades-de-casa-conceito-de-servicos-de-cuidados-a-idosos-ilustracao-moderna-de-plano-vetor.jpg"
  },
  {
    id: 3,
    title: "Reciclagem",
    category: "Meio Ambiente",
    location: "Maricá, RJ",
    description: "Auxilie na coleta seletiva.",
    image: "https://img.freepik.com/vetores-gratis/fundo-de-estilo-de-papel-do-dia-mundial-do-meio-ambiente_23-2149394152.jpg?t=st=1744737514~exp=1744741114~hmac=b4ab1b0aa0773ecfb9c6e4ed74c2368e9390d3c4c8bcf8d18f5a13481c01991d&w=996"
  }
];

const FullVagas = () => {

  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [favorites, setFavorites] = useState([]);
  const [vagas, setVagas] = useState([]);

  // const Inscrever = (e)=>{
  //   navigate('/Inscricao', {state: {id: e.id_vaga, titulo: e.titulo, location: e.localidade, categoria: e.categoria, descricao: e.descricao, imagem: e.image}})

  // }

  

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((fav) => fav !== id)
        : [...prevFavorites, id]
    );
  };

  const filteredJobs = vagas.filter(
    (job) =>
      (selectedCategory === "Todas" || job.categoria === selectedCategory) &&
      job.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

    function getDataHoraBrasileiraSQL() {
    const agora = new Date();

    const dia = String(agora.getDate()).padStart(2, '0');
    const mes = String(agora.getMonth() + 1).padStart(2, '0');
    const ano = agora.getFullYear();

    const hora = String(agora.getHours()).padStart(2, '0');
    const minuto = String(agora.getMinutes()).padStart(2, '0');
    const segundo = String(agora.getSeconds()).padStart(2, '0');

    
    const dataBR = `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;

    const dataSQL = `${ano}-${mes}-${dia} ${hora}:${minuto}:${segundo}`;

    return dataSQL;
  }


  async function Inscrever(id_vaga) {
  try {
    const now = getDataHoraBrasileiraSQL();
    const id_voluntario = parseInt(JSON.parse(sessionStorage.getItem('info')).id);

    const data = await fetch(`http://localhost:4000/vagas/${id_vaga}/Inscricao`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
      },
      body: JSON.stringify({
        id_voluntario,
        data: now
      })
    });

    const response = await data.json();
    alert(response.msg);
  } catch (error) {
    console.error(error);
    alert('Erro ao se inscrever na vaga.');
  }
}


  useEffect(()=>{
      async function listar_vagas(){
      try{
        const jobs = await fetch('http://localhost:4000/vagas', {
          method: 'GET',
          headers: {'Authorization': `Bearer ${sessionStorage.getItem('token')}`, 'Content-Type': 'application/json'}
        })
        
        const jobsList = await jobs.json();
        setVagas(jobsList.result);
      }catch(err){
        alert('Não foi possível listar as vagas!')
        console.log(err)
      }
    }

    listar_vagas()

    
  }, [])

  return (
    
    <div className="container py-4 mt-4" style={{ backgroundColor: "#ede7f6" }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 style={{ color: "#4a148c", fontWeight: "bold", fontFamily: "Merriweather, serif" }}>
          Vagas de Voluntariado
        </h2>
        <InputGroup className="w-100 w-md-50 w-lg-30" style={{ maxWidth: "400px", border: "2px solid #ccc", borderRadius: "8px" }}>
          <Form.Control
            type="text"
            placeholder="Buscar vagas..."
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ border: "none", borderRadius: "8px 0 0 8px" }}
          />
          <InputGroup.Text style={{ backgroundColor: "white", borderRadius: "0 8px 8px 0", border: "none" }}>
            <Search color="#555" />
          </InputGroup.Text>
        </InputGroup>
      </div>
      

      <div className="d-flex justify-content-start mb-4 flex-wrap gap-2">
        {jobCategories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "dark" : "light"}
            className="mx-2 rounded-pill"
            style={{ backgroundColor: selectedCategory === category ? "#4a148c" : "#d1c4e9", border: "none", color: "white" }}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      
      <div className="row justify-content-center">
        {filteredJobs.map((job) => (
          <div key={job.id_vaga} className="col-12 col-sm-6 col-md-4 mb-4 d-flex">
            <Card className="shadow-sm position-relative w-100" style={{ borderRadius: "12px"}}>
              <button 
                className="position-absolute top-0 end-0 m-2 btn btn-light rounded-circle" 
                onClick={() => toggleFavorite(job.id_vaga)}
                style={{ width: "35px", height: "35px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", backgroundColor: "white", border: "1px solid #ddd" }}
              >
                <Heart fill={favorites.includes(job.id_vaga) ? "red" : "none"} color={favorites.includes(job.id_vaga) ? "red" : "gray"} />
              </button>
              <Card.Img variant="top" src={`http://localhost:4000/${job.image}`} style={{ borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }} />
              <Card.Body className="text-left">
                <Card.Title style={{ color: "#000", fontFamily: "Merriweather, serif" }}>{job.titulo}</Card.Title>
                <Card.Text>{job.descricao}</Card.Text>
                <Card.Text>
                  <small className="text-muted">{job.localidade}</small>
                </Card.Text>
                <Button variant="primary" onClick={()=>{Inscrever(job.id_vaga)}}>Inscrever-se</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullVagas;