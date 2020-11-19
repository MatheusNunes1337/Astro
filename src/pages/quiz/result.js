import React from 'react';

import '../../assets/css/global.css'
import '../../assets/css/client.css'


export default function QuizResult() {

  return (
  	<div className="quiz-bg">
	    <div className="result-wrapper">
	      <p className="result">Você acertou 09 das 14 questões.</p>
	      <div className="buttons-wrapper">
		      <button>Baixar o material</button>
		      <button>Tentar novamente</button>
		      <button>Página inicial</button>
		  </div>    
	    </div>
    </div>
  );
}