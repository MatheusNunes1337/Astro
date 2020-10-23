import React, { useState, useEffect } from 'react'
import '../../assets/css/dashboard.css';

//api
import api from '../../services/api'


export default function SchoolTable() {
	
  let [instituicoes, setInstituicoes] = useState([])

  useEffect(() => {
      async function getInstituicoes() {
          const response =  await api.get('school')
          setInstituicoes(response.data)
      }
      getInstituicoes()
    }, [])

    console.log(instituicoes)

  return (
      
  );
}