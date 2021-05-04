import React, { useState, useEffect } from 'react';

import { useHistory, useParams } from 'react-router-dom'

import { BsArrowRight, BsArrowLeftShort  } from 'react-icons/bs';

import api from '../../services/api'

import '../../assets/css/global.css'
import '../../assets/css/client.css'


export default function Answer() {

   let [question, setQuestion] = useState(null)
   //let [acertos, setAcertos] = useState(null)

   let { id } = useParams();
   let history = useHistory();
   
   useEffect(() => {
        async function getQuestions() {
            try {
              const response = await api.get(`question?q=${id}`)
              setQuestion(response.data)
            } catch(err) {
               alert(err)
            }
        }  
      getQuestions()   
    },[])


 async function goBack() {
    history.push('/quiz/gabarito')  
 }

  if(question) {
      return (
         <div className="quiz-bg">
          <div className="answer-wrapper">
            <p className="question">{question.question}</p>
            <div>
              <p className="answer">R: {question.answer}</p>
              <p className="fullAnswer">{question.fullAnswer}</p>
            </div>
            <button onClick={goBack}><BsArrowLeftShort />Voltar</button>    
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