import React, {useState, useEffect} from 'react';

import { useHistory } from 'react-router-dom'

import api from '../../services/api'

import '../../assets/css/global.css'
import '../../assets/css/client.css'


export default function AuthStudent() {

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
            const { _id } = response.data[0]
            setSchool(_id)
          } catch(err) {
             console.error(err)
          }
      }
      getEscolas()
   }, [])

  function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

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

  if(escolas !== []) {
      return (
        <div className="quiz-bg">
            <form className="quiz-form" onSubmit={handleForm}>
                <p>Para fazer o quiz, você precisa informar os seus dados logo abaixo</p>
                <p className="field-name">Nome:</p>
                <input type="text" name="name" onChange={e => setName(capitalizeFirstLetter(e.target.value))}/>
                <p className="field-name">Idade:</p>
                <input type="number" name="age" onChange={e => setAge(parseInt(e.target.value))}/>
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
  } else {
      return (
          <div className="quiz-bg">
            <div className="loader"></div>
          </div>
      )
  }    
}
