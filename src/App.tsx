import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Users} from './types/users'

function App() {
  const [usuarios, setUsers] = useState<any>([])
  const [info, setInfo] = useState<any>()

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/${usuarios}}`).then(resposta => setInfo(resposta.data))
  },[])
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/`)
      .then(resposta => setUsers(resposta.data))
  }, [])
  

  return (
    <>
    <h1>Usuários</h1>
      {usuarios.map((usuario: Users) =>(
      
      <ul>
      <li key={usuario.name}>
        <p onClick={() => setUsers(usuario.id)}>ID: {usuario.id}, NOME: {usuario.name}</p>
      </li>
      </ul>
      
      ))}
      {info.map((dado: Users) =>(
      <ul>
      <li key={dado.id}>
       <p>{dado?.address}</p>
       <p>{dado?.company}</p>
       <p>{dado?.email}</p>
       <p>{dado?.id}</p>
       <p>{dado?.name}</p>
       <p>{dado?.phone}</p>
       <p>{dado?.username}</p>
       <p>{dado?.website}</p>

      </li>
      </ul>))}
      </>
      
      );
}

export default App;
