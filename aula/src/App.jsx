import { useState } from 'react'

import './App.css'

function App() {
  let[pessoas, setPessoas] = useState(['Gabriel', 'Ana', 'Pedro']);
  let[nome, setNome] = useState('');
  let[cpf, setCpf] = useState('');
  function addNome(){
    pessoas.push(`${nome} , ${cpf}`);
    setPessoas([...pessoas]);
    setNome('');
    setCpf('');
  }
  return (

    <div>
    <input type='text' 
    value={nome}
    onChange={(e)=>{setNome(e.target.value)}} placeholder='Nome'/>
    <input type='text' 
    value={cpf}
    onChange={(e)=>{setCpf(e.target.value)}} placeholder='CPF'/>
      <button onClick={addNome}>Salvar</button>
      <ul>
      {pessoas.map(x=>{
        return <li>{x}</li>
      })}
    </ul>
    </div>
    
    
  )
}

export default App
