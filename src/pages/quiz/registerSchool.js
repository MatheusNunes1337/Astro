import React, {useState, useEffect} from 'react';

import { useHistory, Link } from 'react-router-dom'

import '../../assets/css/global.css'
import '../../assets/css/client.css'

import api from '../../services/api'

export default function RegisterSchool() {

  let [escolas, setEscolas] = useState([])
  let [name, setName] = useState('')
  let [age, setAge] = useState('')
  let [school, setSchool] = useState('')

 
  const history = useHistory()

  async function handleForm(e) {
    e.preventDefault()

    const data = {
      name,
      age, 
      school
    }
    
    try {
      if(typeof data.name !== 'string')
          throw new Error ('Informe um nome válido')
      if(typeof data.age !== 'number' || (data.age < 5 || data.age > 45))
          throw new Error('Informe uma idade válida')  

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
            <p>Informe os dados abaixooooo</p>
            <p className="field-name">Email do responsável:</p>
            <input type="email" name="email_resp" onChange={e => setName(e.target.value)}/>
            <p className="field-name">Senha:</p>
            <input type="password" name="password" onChange={e => setAge(parseInt(e.target.value))}/>
            <button onClick={handleForm}>Cadastrar</button>
        </form>
    </div>
  );   
}
