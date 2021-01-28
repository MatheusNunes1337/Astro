import React, {useState, useEffect} from 'react';

import { useHistory, Link, Redirect } from 'react-router-dom'

import '../../../assets/css/global.css'
import '../../../assets/css/client.css'

import api from '../../../services/api'

export default function LoginSchool() {

  let [email_resp, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [forgot_pass, setForgot_pass] = useState(false)

  const iToken = localStorage.getItem('iToken')
 
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

  async function recoverPass(e) {
    e.preventDefault()

    const data = {
      email_resp
    }
    
    try {
      const response = await api.post('recover/pass', data)
      localStorage.setItem('email', data.email_resp)
      localStorage.setItem('recoverPass', true)
      alert(response.data.message)
    } catch(err) {
      alert(err.response.data.message)
    }
  }

  if(iToken) {
    return <Redirect to="/quiz/result/students" />
  } 

  return (
    <div className="quiz-bg">
      {
        (!forgot_pass) ?
        <form className="auth-form" onSubmit={handleForm}>
            <p>Login</p>
            <p className="field-name">Email do responsável:</p>
            <input type="email" name="email_resp" onChange={e => setEmail(e.target.value)}/>
            <p className="field-name">Senha:</p>
            <input type="password" name="password" onChange={e => setPassword(e.target.value)}/>
            <button onClick={handleForm}>Entrar</button>
            <button className="forgot-pass" onClick={() => setForgot_pass(true)}>Esqueceu da senha?</button>    
        </form>
        :
        <form className="auth-form" onSubmit={handleForm}>
            <p>Informe o email do responsável</p>
            <p className="field-name">Email do responsável:</p>
            <input type="email" name="email_resp" onChange={e => setEmail(e.target.value)}/>
            <button onClick={recoverPass}>Confirmar</button>    
        </form>
      }  
    </div>
  );   
}

