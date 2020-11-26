import React, {useState, useEffect} from 'react';

import '../../assets/css/global.css'
import '../../assets/css/client.css'

import { useHistory } from 'react-router-dom'

import api from '../../services/api'


export default function QuizResult() {
  let [acertos, setAcertos] = useState(null)

  const token = localStorage.getItem("sToken")
  let history = useHistory();

  useEffect(() => {
      async function getStudent() {
          try {
            const response =  await api.get('student/find', {
              headers: { Authorization: `Bearer ${token}` }
            })
            setAcertos(response.data.acertos)
          } catch(err) {
             console.error(err)
          }
      }  
      getStudent()
   }, [])

 

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
     console.log(token)
  	 try {
  	 	await api.put('quiz', {
         headers: { Authorization: `Bearer ${token}` }
       })
  	 	history.push('quiz')
  	 } catch(err) {
         alert(err)
  	 }
  }		

  return (
  	<div className="quiz-bg">
	    <div className="result-wrapper">
	      <p className="result">Você acertou {acertos} das 14 questões.</p>
	      <div className="buttons-wrapper">
		      <button onClick={downloadMaterial}>Baixar o material</button>
		      <button onClick={tryAgain}>Tentar novamente</button>
		      <button onClick={goToHome}>Página inicial</button>
		  </div>    
	    </div>
    </div>
  );
}