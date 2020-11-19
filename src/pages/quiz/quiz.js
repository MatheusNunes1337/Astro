import React, { useState, useEffect } from 'react';

import '../../assets/css/global.css'
import '../../assets/css/client.css'


export default function Quiz() {

   let [index, setIndex] = useState(0)
   
   useEffect(() => {
        /*
        async function getQuestions() {
            try {
              const post =  await api.get(`post?p=${id}`)
              setConteudo(post.data.conteudo)
            } catch(err) {
               console.error(err)
            }
        }  

      getQuestions()
      */

      console.log('dentro do useEffect')

    },[])

  function answer(e) {
     setIndex(index + 1);
  }

  return (
    <div className="quiz-bg">
        <p className="aux">Temporizador</p>
        <div className="quiz-wrapper">
          <p className="quiz-question">1. Qual é o maior planeta do sistema solar?</p>
          <button className="quiz-option" onClick={answer}>A. Marte</button>
          <button className="quiz-option" onClick={answer}>B. Júpiter</button>
          <button className="quiz-option" onClick={answer}>C. Saturno</button>
          <button className="quiz-option" onClick={answer}>D. Vênus</button>
        </div>
        <p className="acertos">Acertos: {index}</p>
    </div>
  );
	
}