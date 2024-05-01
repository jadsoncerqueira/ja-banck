import { useNavigate } from "react-router-dom"
import setaIcon from "../IMG/seta.png"

export default function BotaoVoltar() {
    const navigate = useNavigate()
    return <button className="btn-voltar" onClick={() => navigate(-1)}>
        <img src={setaIcon} alt="" />
    </button>
}