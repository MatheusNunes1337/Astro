import React, {useState} from 'react';

import { useHistory } from 'react-router-dom'

import '../../assets/css/global.css'
import '../../assets/css/client.css'


export default function Auth() {

  let [nome, setNome] = useState('')
  let [idade, setIdade] = useState('')
  let [escola, setEscola] = useState('')

  const history = useHistory()

  async function handleForm(e) {
    e.preventDefault()

    const data = {
      nome,
      idade, 
      escola
    }
 
    try {
      /*const response = await api.post('student', data)*/
      history.push('quiz/question')
    } catch(err) {
      alert(err)
    }
  }

  alert('estou na página de auth')  

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
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
            <button onClick={handleForm}>Continuar</button>
        </form>
    </div>
  );
}