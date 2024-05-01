import { useState } from "react"
import { setNewValues } from "../service/apiSheet"
import BotaoInicio from "../components/botaoInicio"
import BotaoVoltar from "../components/botaoVoltar"

function Cadastrar() {
  const [nome, setNome] = useState("")
  const [saldo, setSaldo] = useState(0)
  const [titulo, setTitulo] = useState("Enviar")


    return (
      <div className="div-cadastrar">
        <div className="header">
          <BotaoVoltar />
          <h1>Cadastrar</h1>
        </div>
        
        <BotaoInicio />
        <label className="label-nome" htmlFor="input-nome">
          Nome
        <input value={nome} onChange={({target}) => setNome(target.value)}  id="input-nome" type="text" />
        </label>

        <label className="label-saldo" htmlFor="input-nome">
          Saldo Inicial $
        <input value={saldo} onChange={({target}) => setSaldo(target.value)}  id="input-nome" type="number" />
        </label>

        <button
        onClick={async () => {
          setTitulo("Salvando...");
          await setNewValues({nome, saldo_dracma: saldo})
          setTitulo("Enviar")

        }} 
        className="btn-cadastrar">{titulo}</button>
        
      </div>
    )
  }
  
  export default Cadastrar