import React from 'react';

import '../../assets/css/global.css'
import '../../assets/css/client.css'

import { useHistory } from 'react-router-dom'

import api from '../../services/api'


export default function QuizResult() {

  let history = useHistory();

  /*
  useEffect(() => {
      async function getStudent() {
          try {
            const response =  await api.get('student')
            setEscolas(response.data)
          } catch(err) {
             console.error(err)
          }
      }  

      getStudent()
   }, [])

   */
 

  async function downloadMaterial() {
  	 try {
  	 	await api.get('book/download')	
  	 } catch(err) {
  	 	alert(err)
  	 }
  }

  function goToHome() {
  	 history.push('/home')
  }

  async function tryAgain() {
  	 try {
  	 	await api.put('quiz')
  	 	history.push('quiz')
  	 } catch(err) {
         alert(err)
  	 }
  }		

  return (
  	<div className="quiz-bg">
	    <div className="result-wrapper">
	      <p className="result">Você acertou 09 das 14 questões.</p>
	      <div className="buttons-wrapper">
		      <button onClick={downloadMaterial}>Baixar o material</button>
		      <button onClick={tryAgain}>Tentar novamente</button>
		      <button onClick={goToHome}>Página inicial</button>
		  </div>    
	    </div>
    </div>
  );
}