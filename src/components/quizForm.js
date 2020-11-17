import React from 'react';

import '../assets/css/global.css'
import '../assets/css/client.css'


export default function QuizForm() {

  function handleForm() {

  }  

  return (
    <form className="quiz-form" onSubmit={handleForm}>
        <p>Para fazer o quiz, você precisa informar os seus dados logo abaixo</p>
        <p className="field-name">Nome:</p>
        <input type="text" name="nome"/>
        <p className="field-name">Idade:</p>
        <input type="text" name="idade"/>
        <p className="field-name">Escola:</p>
        <select name="escola">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
        </select>
        <button>Continuar</button>
    </form>
  );
}