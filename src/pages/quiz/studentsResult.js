import React, {useState, useEffect} from 'react';

import '../../assets/css/global.css'
import '../../assets/css/client.css'

import { useHistory } from 'react-router-dom'

import api from '../../services/api'


export default function StudentsResult() {
  let [students, setStudents] = useState('')

  const token = localStorage.getItem("iToken")
  let history = useHistory();

  useEffect(() => {
      async function getStudents() {
          try {
            const response =  await api.get('student/findBySchool', {
              headers: { Authorization: `Bearer ${token}` }
            })
            console.log(response.data)
          } catch(err) {
             alert(err)
          }
      }  
      getStudents()
   }, [])

  function goToHome() {
  	 history.push('/home')
  }

	
  if(students == '') {
      return (
      	<h1>Resultados do quiz</h1>
      );
  } else {
    return (
        <div className="quiz-bg">
          <div className="loader"></div>
        </div>
    )
  }    
}