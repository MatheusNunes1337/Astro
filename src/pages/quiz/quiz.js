import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom'

import api from '../../services/api'

import '../../assets/css/client.css'
import '../../assets/css/global.css'


export default function Quiz() {

   let [questions, setQuestions] = useState(null)
   let [index, setIndex] = useState(0)
   let [acertos, setAcertos] = useState(null)

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
            } catch(err) {
               alert(err)
            }
        }  
      getStudent()   
    },[index])


 async function answer(e) {
   const choice = e.currentTarget.value
   const choice_id = e.currentTarget.id
   const answer = questions[index].answer
   let right_option

   const options = document.getElementsByClassName('quiz-option')

   if(choice === answer) {
     document.getElementById(choice_id).style.backgroundColor = "green"
   } else {
     document.getElementById(choice_id).style.backgroundColor = "red"
     for(let i = 0; i < options.length; i++) {
         if(options[i].value === answer) {
             options[i].style.backgroundColor = 'green'
             right_option = options[i]
         }
     }
   }
   const data = { answer: choice }
    try {
      await api.post(`question/${questions[index]._id}`, 
        data, {
         headers: { Authorization: `Bearer ${token}` }  
      })
      if(index === questions.length - 1) {
        history.push('/quiz/result') 
      } else {
        setIndex(index + 1);
        document.getElementById(choice_id).style.backgroundColor = "#000000"
        if(right_option) { 
          right_option.style.backgroundColor = '#000000' 
        }
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
              <button className="quiz-option" id="opcao_01" value={questions[index].options[0]} onClick={answer}>{questions[index].options[0]}</button>
              <button className="quiz-option" id="opcao_02" value={questions[index].options[1]} onClick={answer}>{questions[index].options[1]}</button>
              <button className="quiz-option" id="opcao_03" value={questions[index].options[2]} onClick={answer}>{questions[index].options[2]}</button>
              <button className="quiz-option" id="opcao_04" value={questions[index].options[3]} onClick={answer}>{questions[index].options[3]}</button>
            </div>
            <p className="acertos">Acertos: {acertos}</p>
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