import React, {useState, useEffect} from 'react';

import { useHistory } from 'react-router-dom'

import api from '../../services/api'

import '../../assets/css/global.css'
import '../../assets/css/client.css'


export default function Auth() {

  let [escolas, setEscolas] = useState([])
  let [nome, setNome] = useState('')
  let [idade, setIdade] = useState('')
  let [escola, setEscola] = useState('')

  /*
  {
    escolas.map((escola, i) => {
        <option value={escola.name} key={i}>escola.name</option>
    })
  }
   */

  const history = useHistory()

  useEffect(() => {
      async function getEscolas() {
          try {
            const response =  await api.get('school')
            setEscolas(response.data)
          } catch(err) {
             console.error(err)
          }
      }
      getEscolas()
   }, [])

  async function handleForm(e) {
    e.preventDefault()

    const data = {
      nome,
      idade, 
      escola
    }
 
    try {
      const response = await api.post('student', data)
      history.push('/quiz/result')
    } catch(err) {
      alert(err)
    }
  } 

  return (
    <div className="quiz-bg">
        <form className="quiz-form" onSubmit={handleForm}>
            <p>Para fazer o quiz, você precisa informar os seus dados logo abaixo</p>
            <p className="field-name">Nome:</p>
            <input type="text" name="nome" onChange={e => setNome(e.target.value)}/>
            <p className="field-name">Idade:</p>
            <input type="text" name="idade" onChange={e => setIdade(e.target.value)}/>
            <p className="field-name">Escola:</p>
            <select name="escola" onChange={e => setEscola(e.target.value)}>
              {
                escolas.map((escola, i) => 
                  <option value={escola.name} key={i}>{escola.name}</option>
                )
              }
            </select>
            <button onClick={handleForm}>Continuar</button>
        </form>
    </div>
  );
}
