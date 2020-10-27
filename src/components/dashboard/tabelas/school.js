import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { MdDelete, MdEdit } from "react-icons/md"

import '../../../assets/css/dashboard.css';

//api
import api from '../../../services/api'


export default function School() {
	
  let [instituicoes, setInstituicoes] = useState([])
  let [message, setMessage] = useState('')
  let [table, setTable] = useState('')

  useEffect(() => {
      async function getInstituicoes() {
          const response =  await api.get('school')
          setInstituicoes(response.data)
          if(response.data.length !== 0) {
              setMessage(`<h2>Total de registros encontrados: ${response.data.length}.</h2>`)
              setTable(
                  <div className="table-wrap"> 
                      <table>
                          <thead>
                              <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>Cidade</th>
                                <th>Estado</th>
                                <th>Ações</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                                instituicoes.map((instituicao, i) => {
                                    <tr key={i}>
                                      <td>{i}</td>
                                      <td>{instituicao.name}</td>
                                      <td>{instituicao.city}</td>
                                      <td>{instituicao.state}</td>
                                      <td>
                                          <Link to='/dashboard/update/{instituicao._id}' className="link">
                                              <button><MdEdit className="actionBtn-icon" /></button>
                                          </Link>  
                                          <button value={instituicao._id} onClick={deleteSchool}><MdDelete className="actionBtn-icon"/></button>
                                      </td>
                                    </tr>
                                })
                              }
                          </tbody>
                      </table>
                  </div>
              )
          } else {
              setMessage(<h2>Parece que ainda não há nenhuma instituição cadastrada no banco de dados.</h2>)
              setTable('')
          }
      }
      getInstituicoes()
    }, [])


   function deleteSchool(e) {
       const id = e.currentTarget.value
       const goAhead = window.confirm('Você está prestes a deletar esse registro. Tem certeza que deseja fazer isso?')
       if(goAhead === true) {
           api.delete(`school/${id}`)
          .then(response => {
            alert(response.data.message)
          })
          .catch(err => {
              console.error(err)
          })
      }
   } 

  return (
      <React.Fragment>
          {message}
          {table}
      </React.Fragment>        
  );
}