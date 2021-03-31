import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom'

import { BsArrowRight } from 'react-icons/bs';

import api from '../../services/api'

import '../../assets/css/global.css'
import '../../assets/css/client.css'


export default function Answers() {

   let [questions, setQuestions] = useState(null)
   let [index, setIndex] = useState(0)
   //let [acertos, setAcertos] = useState(null)

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


 async function nextAnswer() {
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
            <p className="question">{`${index + 1}. ${questions[index].question}`}</p>
            <div>
              <p className="answer">R: {questions[index].answer}</p>
              <p className="fullAnswer">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            <button><BsArrowRight className="arrow-icon" onClick={nextAnswer}/></button>    
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