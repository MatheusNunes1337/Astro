import React from 'react';

import '../../assets/css/global.css'
import '../../assets/css/client.css'

import { useHistory } from 'react-router-dom'


export default function QuizLevel() {
  let history = useHistory();

  function goToQuiz(e) {
     const level = e.currentTarget.value
  	 history.push('/quiz/')
  }

  return (
  	<div className="quiz-bg">
	    <div className="result-wrapper">
	      <p className="result">Escolha o nível do quiz</p>
	      <div className="buttons-wrapper">
		      <button onClick={goToQuiz} value="fácil">Fácil</button>
		      <button onClick={goToQuiz} value="médio">Médio</button>
          <button onClick={goToQuiz} value="difícil">Difícil</button>
		  </div>    
	    </div>
    </div>
  );
     
}