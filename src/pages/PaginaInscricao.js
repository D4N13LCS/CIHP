import { useLocation } from "react-router-dom";
import FormInscricao from "../components/FormularioInscricao";

function PaginaInscricao(){ 
    const location = useLocation();

    return (
        <>
            <FormInscricao id={location.state.id} nome={location.state.titulo} localidade={location.state.location} categoria={location.state.categoria} imagem={location.state.imagem} descricao={location.state.descricao}/>
        </>
    )
}

export default PaginaInscricao;