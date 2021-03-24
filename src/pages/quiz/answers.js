import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom'

import api from '../../services/api'

import '../../assets/css/global.css'
import '../../assets/css/client.css'


export default function Answers() {

   let [questions, setQuestions] = useState(null)
   let [index, setIndex] = useState(0)
   //let [acertos, setAcertos] = useState(null)

   const token = localStorage.getItem("sToken")

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
    },[])


 async function nextAnswer(e) {
    if(index === questions.length - 1) {
      history.push('/quiz/result') 
    } else {
      setIndex(index + 1);
    }   
 }

  if(questions) {
      return (
         <div className="quiz-bg">
          <div className="answers-wrapper">
            <p className="question">{questions[index].question}</p>
            <div>
              <p className="answer">Resposta correta: {questions[index].answer}</p>
              <p className="fullAnswer">Resposta completa aqui</p>
            </div>    
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