import React from 'react';

import '../../assets/css/global.css'
import '../../assets/css/client.css'

import { useHistory, Redirect } from 'react-router-dom'


export default function QuizIndex() {
  let history = useHistory();
  const studentToken = localStorage.getItem("sToken")
  const schoolToken = localStorage.getItem("iToken")

  //if(studentToken)
    //return <Redirect to="/quiz" />

  function goToStudentForm() {
  	 history.push('/quiz/auth/student')
  }

  function goToSchoolForm() {
     history.push('/quiz/auth/school/login')
  }

  return (
  	<div className="quiz-bg">
	    <div className="result-wrapper">
	      <p className="result">Você é...</p>
	      <div className="buttons-wrapper">
		      <button onClick={goToStudentForm}>Estudante</button>
		      <button onClick={goToSchoolForm}>Instituição</button>
		  </div>    
	    </div>
    </div>
  );
     
}