import React, {useState, useEffect} from 'react';

import { useHistory, Link } from 'react-router-dom'

import '../../assets/css/global.css'
import '../../assets/css/client.css'

import api from '../../services/api'

export default function RegisterSchool() {

  let [name, setName] = useState([])
  let [responsavel, setResponsavel] = useState('')
  let [email_resp, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [state, setState] = useState('')
  let [city, setCity] = useState('')

 
  const history = useHistory()

  async function handleForm(e) {
    e.preventDefault()

    const data = {
      name,
      responsavel, 
      email_resp,
      password,
      state,
      city
    }
    
    try {
      if(typeof data.name !== 'string')
          throw new Error ('Informe um nome válido.')
      if(typeof data.responsavel !== 'string')
          throw new Error ('Informe um nome válido.')
      if(data.password.length < 6 || data.password.length > 12)
          throw new Error ('A senha deve conter de 6 a 12 caracteres.')  
      if(typeof data.responsavel !== 'string')
          throw new Error ('Informe um nome para o campo de estado.')
      if(typeof data.city !== 'string')
          throw new Error ('Informe um nome válido para o campo de cidade.')          
        

      const response = await api.post('school/register', data)
      history.push('/quiz/auth/school/login')
    } catch(err) {
      alert(err.response.data.message)
    }
  } 

  return (
    <div className="quiz-bg">
        <form className="quiz-form" onSubmit={handleForm}>
            <p>Nova instituição</p>
            <p className="field-name">Nome da instituição:</p>
            <input type="email" name="email_resp" onChange={e => setName(e.target.value)}/>
            <p className="field-name">Nome do responsável:</p>
            <input type="email" name="email_resp" onChange={e => setResponsavel(e.target.value)}/>
            <p className="field-name">Email do responsável:</p>
            <input type="email" name="email_resp" onChange={e => setEmail(e.target.value)}/>
            <p className="field-name">Senha:</p>
            <input type="password" name="password" onChange={e => setPassword(e.target.value)}/>
            <p className="field-name">Estado:</p>
            <input type="email" name="email_resp" onChange={e => setState(e.target.value)}/>
            <p className="field-name">Cidade:</p>
            <input type="email" name="email_resp" onChange={e => setCity(e.target.value)}/>
            <button onClick={handleForm}>Cadastrar</button>
        </form>
    </div>
  );   
}
