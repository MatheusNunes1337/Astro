import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom'

import api from '../../services/api'

import '../../assets/css/global.css'
import '../../assets/css/client.css'


export default function Quiz() {

   let [questions, setQuestions] = useState([])
   let [index, setIndex] = useState(0)

   let history = useHistory();
   
   useEffect(() => {
        async function getQuestions() {
            try {
              const response =  await api.get('question')
              setQuestions(response.data)
            } catch(err) {
               alert(err)
            }
        }  
      getQuestions()
   
    },[])

  function answer(e) {
     if(index !== questions.length - 1) {
        setIndex(index + 1);
     } else {
       history.push('quiz/result')
     }
  }

  return (
    <div className="quiz-bg">
        <p className="aux">Pergunta {index + 1}</p>
        <div className="quiz-wrapper">
          <p className="quiz-question">questions[index].question</p>
          <button className="quiz-option" onClick={answer}>questions[index].options[0]</button>
          <button className="quiz-option" onClick={answer}>questions[index].options[1]</button>
          <button className="quiz-option" onClick={answer}>questions[index].options[2]</button>
          <button className="quiz-option" onClick={answer}>questions[index].options[3]</button>
        </div>
        <p className="acertos">Categoria: {questions[index].category}</p>
    </div>
  );
	
}