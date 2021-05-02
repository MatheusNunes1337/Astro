import React, {useState, useEffect} from 'react';

import '../../assets/css/global.css'
import '../../assets/css/client.css'

import { useHistory } from 'react-router-dom'
import { BsBoxArrowInLeft } from "react-icons/bs";

import api from '../../services/api'


export default function Gabarito() {
  let [questions, setQuestions] = useState('')

  const token = localStorage.getItem("iToken")
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

   function goBack() {
      history.push('/quiz/result')  
   }

   function showDetails(e) {
       const questionId = e.currentTarget.value
       history.push(`/quiz/answer/${questionId}`)
   } 

	
  if(questions !== '') {
      return (
      	<div className="gabarito-container">
            <button onClick={goBack}><BsBoxArrowInLeft className="logout-icon" />Voltar</button>
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
                               <td>{question.answer}</td>
                              <td><button value={question._id} onClick={showDetails}>Ver detalhes</button></td>
                            </tr>
                        )
                      }
                  </tbody>
              </table>
            </div>
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