import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1em;
  padding: 1em;
`;

const VagaForms = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const VagaCamposContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const VagaLabel = styled.label`
  font-weight: 600;
  margin-bottom: 0.3em;
`;

const VagaInput = styled.input`
  padding: 0.4em;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const VagaTextarea = styled.textarea`
  padding: 0.4em;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const VagaSelect = styled.select`
  padding: 0.4em;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const PublicarButton = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  color: #6941c6;
  font-weight: 500;
  padding: 0.5em 1em;
  width: fit-content;
  align-self: center;

  &:hover {
    background-color: rgb(105, 65, 198);
    color: white;
  }
`; 

function PublicarVagas() {
    const [formData, setFormData] = useState({
      nome_ong: "",
      cnpj: "",
      area: "",
      site: "",
      cidade: "",
      responsavel: "",
      email: "",
      telefone: "",
      titulo: "",
      descricao: "",
      atividades: "",
      requisitos: "",
      horario: "",
      tipo_voluntariado: "",
      beneficios: "",
      prazo: "",
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Formulário enviado:", formData);
    };
  
    return (
      <Container>
        <h2>Cadastro de Vaga de Trabalho Voluntário</h2>
        <VagaForms onSubmit={handleSubmit}>
          {[
            ["Nome da instituição", "nome_ong"],
            ["CNPJ (opcional)", "cnpj"],
            ["Área de atuação", "area"],
            ["Site ou rede social", "site"],
            ["Cidade / Estado", "cidade"],
            ["Nome do responsável", "responsavel"],
            ["E-mail de contato", "email"],
            ["Telefone / WhatsApp", "telefone"],
            ["Título da vaga", "titulo"],
            ["Horário / Dias disponíveis", "horario"],
            ["Prazo para candidatura", "prazo", "date"],
          ].map(([label, name, type = "text"]) => (
            <VagaCamposContainer key={name}>
              <VagaLabel htmlFor={name}>{label}</VagaLabel>
              <VagaInput
                id={name}
                name={name}
                type={type}
                value={formData[name]}
                onChange={handleChange}
              />
            </VagaCamposContainer>
          ))}
  
          <VagaCamposContainer>
            <VagaLabel htmlFor="descricao">Descrição da vaga</VagaLabel>
            <VagaTextarea
              id="descricao"
              name="descricao"
              rows="4"
              value={formData.descricao}
              onChange={handleChange}
            />
          </VagaCamposContainer>
  
          <VagaCamposContainer>
            <VagaLabel htmlFor="atividades">Principais atividades</VagaLabel>
            <VagaTextarea
              id="atividades"
              name="atividades"
              rows="4"
              value={formData.atividades}
              onChange={handleChange}
            />
          </VagaCamposContainer>
  
          <VagaCamposContainer>
            <VagaLabel htmlFor="requisitos">Requisitos</VagaLabel>
            <VagaTextarea
              id="requisitos"
              name="requisitos"
              rows="3"
              value={formData.requisitos}
              onChange={handleChange}
            />
          </VagaCamposContainer>
  
          <VagaCamposContainer>
            <VagaLabel htmlFor="beneficios">Benefícios</VagaLabel>
            <VagaTextarea
              id="beneficios"
              name="beneficios"
              rows="3"
              value={formData.beneficios}
              onChange={handleChange}
            />
          </VagaCamposContainer>
  
          
  
          <PublicarButton type="submit">Publicar</PublicarButton>
        </VagaForms>
      </Container>
    );
  }

export default PublicarVagas;