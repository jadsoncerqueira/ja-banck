import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { findByIndex, updateValue } from "../service/apiSheet"
import BotaoInicio from "../components/botaoInicio"
import BotaoVoltar from "../components/botaoVoltar"

function Detalhes() {
  const [user, setUser] = useState({})
  const [saldo, setSaldo] = useState(0)
  const [loading, setLoading] = useState(true)
  const [mudou, setmMudou] = useState(true)
   const {id} =useParams()

   useEffect(() => async () => {
    setLoading(true)
    const res = await findByIndex(id);
    setUser(res);
      setLoading(false)
   }, [mudou])

    return (
      <div>
        {
          loading ? <p>Carregando...</p>
          : <div>
            <BotaoInicio />
            <p className="p-btn"><BotaoVoltar /></p>
            <p className="nome-usuario-detalhes">{user.nome}</p>
            <h2 className="saldo-usuario-detalhes">Denários: ${user.saldoDracma}</h2>
            <input value={saldo} onChange={({target}) => setSaldo(target.value)} className="input-set" type="number" />
        <div className="div-detalhes-btn">
          <button onClick={async () => {
            await updateValue(id, "saldo_dracma", saldo, "credito");
            setmMudou(!mudou);
          }} className="btn-credito">Credito</button>
          <button onClick={async () => {
            await updateValue(id, "saldo_dracma", saldo, "debito");
            setmMudou(!mudou);
        }} className="btn-debito">Debito</button>
        </div>
          </div> 
        }
      </div>
    )
  }
  
  export default Detalhes