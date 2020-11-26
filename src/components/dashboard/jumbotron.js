import React, { useState, useEffect } from 'react'

import api from '../../services/api'

import '../../assets/css/global.css'
import '../../assets/css/dashboard.css';


export default function Jumbotron() {
	let [greeting, setGreeting] = useState('');
  let [adminName, setadminName] = useState('');
	const date = new Date()

  const token = localStorage.getItem("aToken")

	useEffect(() => {
    const interval = setInterval(() => {
      let hours = date.getHours()
      if(hours >= 12 && hours <= 18) {
      	setGreeting(greeting = 'Boa tarde')
      } else if ( hours >= 19 || hours <= 5) {
      		setGreeting(greeting = 'Boa noite')
      } else {
      	setGreeting(greeting = 'Bom dia')

      }
    }, 1000);
    return () => clearInterval(interval);
  }, [greeting])

  useEffect(() => {
    api.get('admin', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(response => {
       setadminName(response.data)
    }).catch(err => {
      alert(err)
    })
  }, [])

  return (
    <div className="jumbotron">
	    <h1>{greeting}, {adminName}. Bem vindo de volta!</h1>
	</div>
  );
}