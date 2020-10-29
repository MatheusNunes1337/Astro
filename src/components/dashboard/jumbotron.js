import React, { useState, useEffect } from 'react'

import '../../assets/css/global.css'
import '../../assets/css/dashboard.css';


export default function Jumbotron() {
	let [greeting, setGreeting] = useState('');
	const date = new Date()

	useEffect(() => {
    const interval = setInterval(() => {
      let hours = date.getHours()
      if(hours >= 12 && hours <= 18) {
      	setGreeting(greeting = 'Boa tarde')
      } else if ( hours >= 19 && hours <= 5) {
      		setGreeting(greeting = 'Boa noite')
      } else {
      	setGreeting(greeting = 'Bom dia')

      }
    }, 1000);
    return () => clearInterval(interval);
  	}, [])

  return (
    <div className="jumbotron">
	    <h1>{greeting}, Matheus. Bem vindo de volta!</h1>
	</div>
  );
}