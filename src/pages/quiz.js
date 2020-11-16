import React, { useState } from 'react';
import { Link } from 'react-router-dom'


import '../assets/css/global.css'
import '../assets/css/client.css'

export default function Quiz() {
	return (
		<div className="quiz-bg">
			<p className="aux">Temporizador</p>
			<div className="quiz-wrapper">
				<p className="quiz-question">1. Qual é o maior planeta do sistema solar?</p>
				<button className="quiz-option">A. Marte</button>
				<button className="quiz-option">B. Júpiter</button>
				<button className="quiz-option">C. Saturno</button>
				<button className="quiz-option">D. Vênus</button>
			</div>
			<p className="acertos">Acertos: 02</p>
		</div>
	)	
}