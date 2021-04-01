import React, { useState, useEffect } from 'react'

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

   useEffect(() => {
        async function getSchool() {
            try {
              const response =  await api.get(`school?s=${props.schoolId}`)
              setName(response.data.name)
              setCity(response.data.city)
              setState(response.data.state)
              setResponsavel(response.data.responsavel)
              setEmail(response.data.email_resp)
            } catch(err) {
               console.error(err)
            }
        }  

      getSchool()

    },[props.schoolId])


  async function handleSchool(e) {
    e.preventDefault()

    const data = {
      name,
      city,
      state,
      responsavel,
      email_resp
    }
    
    api.put(`school/${props.schoolId}`, data, {
       headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
        alert(response.data.message)
    })
    .catch(err => {
        if (err.response && err.response.data) {
          alert(err.response.data.message)
        }
     })
  }
	
  if(name !== '') {
      return (
          <form name="Instituicao" onSubmit={handleSchool}>
              <div className="form-group">
                  <p>Nome</p>
                  <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}/>
              </div>
              <div className="form-group">
                  <p>Cidade</p>
                  <input type="text" name="city" value={city} onChange={e => setCity(e.target.value)}/>
              </div>
              <div className="form-group">
                  <p>Estado</p>
                  <input type="text" name="state" value={state} onChange={e => setState(e.target.value)}/>
              </div>
              <div className="form-group">
                  <p>Responsavel</p>
                  <input type="text" name="responsavel" value={responsavel} onChange={e => setResponsavel(e.target.value)}/>
              </div>
              <div className="form-group">
                  <p>E-mail do responsavel</p>
                  <input type="email" name="email_resp" value={email_resp} onChange={e => setEmail(e.target.value)}/>
              </div>
              <button type="submit">Atualizar</button>
          </form>
      );
  } else {
      return (
       <p>carregando...</p>
     )
  }  
}