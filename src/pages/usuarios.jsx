import { useEffect, useState } from "react"
import Usuario from "../components/usuario"
import { getValues } from "../service/apiSheet"
import BotaoInicio from "../components/botaoInicio"
import BotaoVoltar from "../components/botaoVoltar"


function Usuarios() {
  const [search, setSearch] = useState("")
  const [usu, setUso] = useState([])

  let usuarios = usu.filter((el) => el.nome.toUpperCase().includes(search.toLocaleUpperCase()))
  
  useEffect(() => {
    getValues().then(res => {
      res.sort((a, b) => {
        return a.saldoDracma > b.saldoDracma ? -1 : a.saldoDracma < b.saldoDracma ? 1 : 0;
      })
      setUso(res)
    })

  }, [])

  useEffect(() => {
    usuarios = usu.filter((el) => el.nome.toUpperCase().includes(search.toLocaleUpperCase()))
  }, [search])




    return (
      <div className="div-usuario-principal">
        
        <div className="header">
          <BotaoVoltar />
          <h1 className="titulo-usuarios"> Usuarios</h1>
        </div>
  <BotaoInicio />
  <input value={search} onChange={({target}) => {
    setSearch(target.value)
  }} placeholder="Pesquisar..." className="input-usuarios" type="text" />
  <div className="div-usuarios">
    {
      usuarios.length > 0 ? usuarios.map((usuario, index) => <Usuario key={index} usuario={usuario} />) : "Sem usuários"
    }
  </div>
      </div>
    )
  }
  
  export default Usuarios