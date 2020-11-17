import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import QuizForm from '../components/quizForm'

import '../assets/css/global.css'
import '../assets/css/client.css'

export default function Quiz() {

	function handleForm() {

	}

	return (
		<div className="quiz-bg">
			<QuizForm />
		</div>
	)	
}