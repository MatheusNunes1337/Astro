import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom'

import api from '../../services/api'

import '../../assets/css/global.css'
import '../../assets/css/client.css'


export default function Quiz() {

   let [questions, setQuestions] = useState(null)
   let [index, setIndex] = useState(0)
   let [acertos, setAcertos] = useState(null)

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

   useEffect(() => {
        async function getStudent() {
            try {
              const response = await api.get('student/find', {
                headers: { Authorization: `Bearer ${token}` }
              })
              setAcertos(response.data.acertos)
            } catch(err) {
               alert(err)
            }
        }  
      getStudent()   
    },[index])


 async function answer(e) {
   const answer = e.currentTarget.value;
   const data = { answer }
    try {
      await api.post(`question/${questions[index]._id}`, 
        data, {
         headers: { Authorization: `Bearer ${token}` }  
      })
      if(index === questions.length - 1) {
        history.push('/quiz/result') 
      } else {
        setIndex(index + 1);
      }  
    } catch(err) {
        alert(err)
    } 
      
  }

  if(questions && acertos >= 0) {

      return (
        
        <div className="quiz-bg">
            <p className="question-number">Pergunta {index + 1}</p>
            <div className="quiz-wrapper">
              <p className="quiz-question">{questions[index].question}</p>
              <button className="quiz-option" value={questions[index].options[0]} onClick={answer}>{questions[index].options[0]}</button>
              <button className="quiz-option" value={questions[index].options[1]} onClick={answer}>{questions[index].options[1]}</button>
              <button className="quiz-option" value={questions[index].options[2]} onClick={answer}>{questions[index].options[2]}</button>
              <button className="quiz-option" value={questions[index].options[3]} onClick={answer}>{questions[index].options[3]}</button>
            </div>
            <p className="acertos">Acertos: {acertos}</p>
        </div>
      );
  } else {
     return (
       <p>carregando...</p>
     )
  } 
  	
}