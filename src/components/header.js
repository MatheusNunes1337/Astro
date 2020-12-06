import React from 'react';

import { Link } from 'react-router-dom'

import '../assets/css/global.css'
import '../assets/css/client.css'


export default function Header() {

  return (
    <header>
  	    <span className="logo">
          	Astro
        </span>
        <Link to="/quiz/auth"><button className="quiz-btn">Quiz</button></Link>
	  </header>
  );
}