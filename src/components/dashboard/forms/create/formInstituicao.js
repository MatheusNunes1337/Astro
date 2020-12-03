import React, { useState } from 'react'

import '../../../../assets/css/global.css'
import '../../../../assets/css/dashboard.css';

//api
import api from '../../../../services/api'


export default function Instituicao(props) {

  let [name, setName] = useState('')
   let [city, setCity] = useState('')
   let [state, setState] = useState('')
   let [responsavel, setResponsavel] = useState('')
   let [email_resp, setEmail] = useState('')

   const token = localStorage.getItem("aToken")

  async function handleSchool(e) {
    e.preventDefault()

    const form = document.getElementById('formSchool')

    const data = {
      name,
      city,
      state,
      responsavel,
      email_resp
    }
    
    api.post('school/', data, {
      headers: { Authorization: `Bearer ${token}` }
    })
   .then(response => {
        alert(response.data.message)
        form.reset()
    })
    .catch(err => {
       if (err.response && err.response.data) {
        alert(err.response.data.message)
      }
    })
  }
	

  return (
      <form name="instituicao" id="formSchool" onSubmit={handleSchool}>
          <div className="form-group">
              <p>Nome</p>
              <input type="text" name="name" onChange={e => setName(e.target.value)}/>
          </div>
          <div className="form-group">
              <p>Cidade</p>
              <input type="text" name="city" onChange={e => setCity(e.target.value)}/>
          </div>
          <div className="form-group">
              <p>Estado</p>
              <input type="text" name="state" onChange={e => setState(e.target.value)}/>
          </div>
          <div className="form-group">
              <p>Responsavel</p>
              <input type="text" name="responsavel" onChange={e => setResponsavel(e.target.value)}/>
          </div>
          <div className="form-group">
              <p>E-mail do responsavel</p>
              <input type="email" name="email_resp" onChange={e => setEmail(e.target.value)}/>
          </div>
          <button type="submit">Criar</button>
      </form>
  );
}