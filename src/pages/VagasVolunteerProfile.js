import React, { useState } from "react";
import { Card, Button, Form, InputGroup } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Heart, Search } from "react-feather";

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
    title: "Daniel Yag",
    category: "Meio Ambiente",
    location: "Maricá, RJ",
    description: "Auxilie o yag nos dando 10.",
    image: "https://media-gig4-2.cdn.whatsapp.net/v/t61.24694-24/464537568_1968450000303545_793351668498106864_n.jpg?ccb=11-4&oh=01_Q5AaIQMx6ybSbKDr8fdIHCAhQ9rK24LnYUuMnBn35wIYTrFf&oe=67F9586F&_nc_sid=5e03e0&_nc_cat=101"
  }
];

const FullVagas = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((fav) => fav !== id)
        : [...prevFavorites, id]
    );
  };

  const filteredJobs = jobs.filter(
    (job) =>
      (selectedCategory === "Todas" || job.category === selectedCategory) &&
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    
    <div className="container py-4 mt-4" style={{ backgroundColor: "#ede7f6" }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 style={{ color: "#4a148c", fontWeight: "bold", fontFamily: "Merriweather, serif" }}>
          Vagas de Voluntariado
        </h2>
        <InputGroup style={{ width: "30%", border: "2px solid #ccc", borderRadius: "8px" }}>
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
      

      <div className="d-flex justify-content-start mb-4">
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
          <div key={job.id} className="col-md-4 mb-4">
            <Card className="shadow-sm position-relative" style={{ borderRadius: "12px", width: "100%" }}>
              <button 
                className="position-absolute top-0 end-0 m-2 btn btn-light rounded-circle" 
                onClick={() => toggleFavorite(job.id)}
                style={{ width: "35px", height: "35px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", backgroundColor: "white", border: "1px solid #ddd" }}
              >
                <Heart fill={favorites.includes(job.id) ? "red" : "none"} color={favorites.includes(job.id) ? "red" : "gray"} />
              </button>
              <Card.Img variant="top" src={job.image} style={{ borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }} />
              <Card.Body className="text-left">
                <Card.Title style={{ color: "#000", fontFamily: "Merriweather, serif" }}>{job.title}</Card.Title>
                <Card.Text>{job.description}</Card.Text>
                <Card.Text>
                  <small className="text-muted">{job.location}</small>
                </Card.Text>
                <Button variant="primary">Saiba Mais</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullVagas;