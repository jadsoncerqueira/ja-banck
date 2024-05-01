
import logo from "../IMG/logo.png"
import { useNavigate } from "react-router-dom"


function Home() {
    const navigate = useNavigate();
  return (
    <div className="div-home">
        <img className="logo-home" src={logo} alt="" />
        <button onClick={() => navigate("/cadastrar")} className="btn-home">CADASTRAR USUÁRIO</button>
        <button onClick={() => navigate("/usuarios")} className="btn-home">USUÁRIOS</button>
    </div>
  )
}

export default Home