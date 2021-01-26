import React, {useState} from 'react';

import { useHistory, Link } from 'react-router-dom'

import '../../../assets/css/global.css'
import '../../../assets/css/client.css'

import api from '../../../services/api'

export default function PasswordForm() {

  let [password, setPassword] = useState('')
  let [password2, setPassword2] = useState('')
 
  const history = useHistory()
  const email_resp = localStorage.getItem('email')

  async function handleForm(e) {
    e.preventDefault()

    const data = {
      password,
      password2,
      email_resp
    }
    
    try {
      if(data.password !== data.password2)
          throw new Error ('As senhas não coincidem.')
      else if(data.password.length < 6 || data.password.length > 12)
          throw new Error ('A senha deve conter de 6 a 12 caracteres.')
      console.log(data)  
      //const response = await api.put('school', data)
      //alert(response.data.message)
      //history.push('/quiz/auth/school/login')
    } catch(err) {
      alert(err.response.data.message)
      alert(err)
    }
  }

  return (
    <div className="quiz-bg">
        <form className="quiz-form" onSubmit={handleForm}>
            <p>Informe a sua nova senha</p>
            <p className="field-name">Nova senha:</p>
            <input type="password" name="email_resp" onChange={e => setPassword(e.target.value)}/>
            <p className="field-name">Repetir senha:</p>
            <input type="password" name="password" onChange={e => setPassword2(e.target.value)}/>
            <button onClick={handleForm}>Confirmar</button>
        </form>
    </div>
  );   
}
