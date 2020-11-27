import React, {useState, useEffect} from 'react';

import { useHistory } from 'react-router-dom'

import api from '../../services/api'

import '../../assets/css/global.css'
import '../../assets/css/client.css'


export default function Auth() {

  let [escolas, setEscolas] = useState([])
  let [name, setName] = useState('')
  let [age, setAge] = useState('')
  let [school, setSchool] = useState('')

 
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
      name,
      age, 
      school
    }
 
    try {
      const response = await api.post('student', data)
      localStorage.setItem('sToken', response.data)
      history.push('/quiz')
    } catch(err) {
      alert(err)
    }
  } 

  return (
    <div className="quiz-bg">
        <form className="quiz-form" onSubmit={handleForm}>
            <p>Para fazer o quiz, você precisa informar os seus dados logo abaixo</p>
            <p className="field-name">Nome:</p>
            <input type="text" name="name" onChange={e => setName(e.target.value)} pattern="^\w{3,12}$" 
            required oninvalid="this.setCustomValidity('O nome deve contér de 3 a 12 caracteres')"/>
            <p className="field-name">Idade:</p>
            <input type="text" name="age" onChange={e => setAge(e.target.value)} pattern="^[1-9]$|^[1-9][0-9]$|^(100)$" 
            required oninvalid="this.setCustomValidity('Somente idades são aceitas')" />
            <p className="field-name">Escola:</p>
            <select name="school" onChange={e => setSchool(e.target.value)}>
              {
                escolas.map((escola, i) => 
                  <option value={escola._id} key={i}>{escola.name}</option>
                )
              }
            </select>
            <button onClick={handleForm}>Continuar</button>
        </form>
    </div>
  );
}
