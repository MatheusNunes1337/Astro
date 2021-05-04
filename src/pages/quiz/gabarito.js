import React, {useState, useEffect} from 'react';

import '../../assets/css/global.css'
import '../../assets/css/client.css'

import { useHistory } from 'react-router-dom'
import { BsArrowLeftShort } from 'react-icons/bs'

import api from '../../services/api'


export default function Gabarito() {
  let [questions, setQuestions] = useState('')
  let [acertos, setAcertos] = useState(null)
  let [loaded, setLoaded] = useState(false)

  const token = sessionStorage.getItem("sToken")
  let history = useHistory();

  useEffect(() => {
        async function getQuestions() {
            try {
              const response = await api.get('question')
              setQuestions(response.data)
            } catch(err) {
               alert(err)
            }
        }  
      getQuestions()   
    },[token])

   useEffect(() => {
        setAcertos(null)
        async function getStudent() {
            try {
              const response = await api.get('student/find', {
                headers: { Authorization: `Bearer ${token}` }
              })
              setAcertos(response.data.acertos)

              //setLoaded(true)
            } catch(err) {
               alert(err)
            }
        }  
      getStudent()   
    },[])

   function goBack() {
      history.push('/quiz/result')  
   }

   function showDetails(e) {
       const questionId = e.currentTarget.value
       history.push(`/quiz/answer/${questionId}`)
   }
	
  if(questions !== '' && acertos !== null) {
      return (
      	<div className="gabarito-container">
            <button onClick={goBack}><BsArrowLeftShort className="logout-icon" />Voltar</button>
            <h1>Gabarito</h1>
            <div className="table-wrap"> 
              <table>
                  <thead>
                      <tr>
                        <th>nº pergunta</th>
                        <th>Resposta</th>
                        <th>Ação</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                         questions.map((question, i) => 
                            <tr key={i}>
                              <td>{i + 1}</td>
                               <td style={ acertos.includes(question._id) ? { backgroundColor:'green'} : {backgroundColor:'red'}}>{question.answer}</td>
                              <td><button value={question._id} onClick={showDetails}>Ver detalhes</button></td>
                            </tr>
                        )
                      }
                  </tbody>
              </table>
            </div>
            <span className="corretas">Respondida corretamente</span>
            <span className="incorretas">Respondida incorretamente</span>
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