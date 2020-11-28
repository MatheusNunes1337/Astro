import React, { useState, useEffect } from 'react'
import { MdDelete } from "react-icons/md"

import '../../../assets/css/dashboard.css';

//api
import api from '../../../services/api'


export default function Student() {
  
  let [students, setStudents] = useState([])
  let [message, setMessage] = useState('')
  let [table, setTable] = useState('')

  const token = localStorage.getItem("aToken")

  useEffect(() => {
      async function getStudents() {
          const response =  await api.get('student')
          setStudents(response.data)
          if(response.data.length !== 0) {
              setMessage(<h2>Total de registros encontrados: {response.data.length}</h2>)
              setTable(
                  <div className="table-wrap"> 
                      <table>
                          <thead>
                              <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>Escola</th>
                                <th>Ações</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                                response.data.map((student, i) => 
                                    <tr className="student-info" key={i}>
                                      <td>{i + 1}</td>
                                      <td>{student.name}</td>
                                      <td>{student.school.name}</td>
                                      <td> 
                                          <button value={student._id} onClick={deleteStudent}><MdDelete className="actionBtn-icon"/></button>
                                      </td>
                                    </tr>
                                )
                              }
                          </tbody>
                      </table>
                  </div>
              )
          } else {
              setMessage(<h2>Parece que ainda não há nenhum aluno cadastrado no banco de dados.</h2>)
              setTable('')
          }
      }
      getStudents()
    }, [])


   function deleteStudent(e) {
       const id = e.currentTarget.value
       const goAhead = window.confirm('Você está prestes a deletar esse registro. Tem certeza que deseja fazer isso?')
       if(goAhead === true) {
           api.delete(`student/${id}`, {
             headers: { Authorization: `Bearer ${token}` }
           })
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