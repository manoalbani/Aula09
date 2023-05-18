import { useState } from 'react'

import './App.css'

function App() {
  let[nomes, setNomes] = useState(['Gabriel', 'Ana', 'Pedro']);
  let[nome, setNome] = useState('');
  function addNome(){
    nomes.push(nome);
    setNomes([...nomes]);
    setNome('');
  }
  return (

    <div>
      <input type='text' 
      value={nome}
      onChange={(e)=>{setNome(e.target.value)}} placeholder='Nome'/>
      <button onClick={addNome}>Salvar</button>
      <ul>
      {nomes.map(x=>{
        return <li>{x}</li>
      })}
    </ul>
    </div>
    
    
  )
}

export default App
