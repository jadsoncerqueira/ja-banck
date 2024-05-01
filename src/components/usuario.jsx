import { useNavigate } from "react-router-dom";

function Usuario(props) {
    const {usuario} = props;

    const navigate = useNavigate()
    return (
      <button onClick={() => navigate(`/detalhes/${usuario.id}`)} className="card-usuario">
        
  <p className="nome-usuario">{usuario.nome}</p>
  <p className="saldo-usuario">${usuario.saldoDracma}</p>
      </button>
    )
  }
  
  export default Usuario