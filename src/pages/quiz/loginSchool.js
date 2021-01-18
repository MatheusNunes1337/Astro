import React, {useState, useEffect} from 'react';

import { useHistory, Link } from 'react-router-dom'

import '../../assets/css/global.css'
import '../../assets/css/client.css'

import api from '../../services/api'

export default function LoginSchool() {

  let [email_resp, setEmail] = useState('')
  let [password, setPassword] = useState('')
 
  const history = useHistory()

  async function handleForm(e) {
    e.preventDefault()

    const data = {
      email_resp,
      password
    }
    
    try {
      const response = await api.post('school/login', data)
      localStorage.setItem('iToken', response.data)
      history.push('/quiz/result/students')
    } catch(err) {
      alert(err.response.data.message)
    }
  } 

  return (
    <div className="quiz-bg">
        <form className="quiz-form" onSubmit={handleForm}>
            <p>Login</p>
            <p className="field-name">Email do responsável:</p>
            <input type="email" name="email_resp" onChange={e => setEmail(e.target.value)}/>
            <p className="field-name">Senha:</p>
            <input type="password" name="password" onChange={e => setPassword(e.target.value)}/>
            <button onClick={handleForm}>Entrar</button>
            <Link to="/quiz/auth/school/register" className="no_account_yet">Não possui um cadastro?</Link>
        </form>
    </div>
  );   
}
