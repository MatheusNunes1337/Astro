import React, { useState, useEffect } from 'react'
import CKEditor from 'ckeditor4-react'

import api from '../../services/api'
import '../../assets/css/dashboard.css';




export default function Question() {
	 let [options, setOptions] = useState([])
  


  function addOption() {
    let option = document.getElementById('options_field').value;
    console.log('option:' ,option)
    setOptions(options => [...options, option])
  }

  function resetOptions() {
      setOptions([])
  }


  return (
      <form name="question">
          <div className="form-group">
              <p>Pergunta</p>
              <input type="text" name="question"/>
          </div>
          <div className="form-group">
              <p>Categoria</p>
              <input type="text" name="category"/>
          </div>
          <div className="form-group">
              <p>Opções</p>
              <input type="text" name="option" id="options_field"/>
              <button type="button" className="optionsBtn" onClick={addOption}>oi</button>
              <button type="button" className="optionsBtn" onClick={resetOptions}>reset</button>
          </div>
          <div className="question_options">
              {options.map((option, i) =>
                <span className="option" key={i}>{ option }</span>
              )}
          </div>
          <div className="form-group">
              <p>Resposta</p>
              <input type="text" name="answer"/>
          </div> 
          <button type="submit">Criar</button>
      </form> 
  );
}