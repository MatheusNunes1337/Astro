import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { MdDelete, MdEdit } from "react-icons/md"

import '../../../assets/css/dashboard.css';

//api
import api from '../../../services/api'


export default function Question() {
	
  let [questions, setQuestions] = useState([])
  let [message, setMessage] = useState('')
  let [table, setTable] = useState('')

  const token = localStorage.getItem("aToken")

  useEffect(() => {
      async function getQuestions() {
          const response =  await api.get('question')
          setQuestions(response.data)
          if(response.data.length !== 0) {
              setMessage(<h2>Total de registros encontrados: {response.data.length}</h2>)
              setTable(
                  <div className="table-wrap"> 
                      <table>
                          <thead>
                              <tr>
                                <th>#</th>
                                <th>Questão</th>
                                <th>Categoria</th>
                                <th>Resposta</th>
                                <th>Ações</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                                response.data.map((question, i) => 
                                    <tr key={i}>
                                      <td>{i + 1}</td>
                                      <td>{question.question}</td>
                                      <td>{question.category}</td>
                                      <td>{question.answer}</td>
                                      <td>
                                          <Link to={'/dashboard/update/question/' + question._id} className="link">
                                              <button><MdEdit className="actionBtn-icon" /></button>
                                          </Link>  
                                          <button value={question._id} onClick={deleteQuestion}><MdDelete className="actionBtn-icon"/></button>
                                      </td>
                                    </tr>
                                )
                              }
                          </tbody>
                      </table>
                  </div>
              )
          } else {
              setMessage(<h2>Parece que ainda não há nenhuma pergunta cadastrada no banco de dados.</h2>)
              setTable('')
          }
      }
      getQuestions()
    }, [questions])


   function deleteQuestion(e) {
       const id = e.currentTarget.value
       const goAhead = window.confirm('Você está prestes a deletar esse registro. Tem certeza que deseja fazer isso?')
       if(goAhead === true) {
           api.delete(`question/${id}`, {
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