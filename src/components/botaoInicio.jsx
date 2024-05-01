import { useNavigate } from "react-router-dom"

export default function BotaoInicio() {
    const navigate = useNavigate()
    return <button className="btn-inicio" onClick={() => navigate("/")}>{">> "}Inicio{" <<"}</button>
}