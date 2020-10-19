import React, { useState, useEffect } from 'react'
import CKEditor from 'ckeditor4-react'
import '../../assets/css/dashboard.css';


export default function Question() {
	 let [options, setOptions] = useState('')
  


  function setOption() {
    let option = document.getElementById('options_field').value;
    console.log(option)
  }

  return (
      <form name="question">
          <div className="form-group">
              <p>Pergunta</p>
              <input type="text" name="question"/>
          </div>
          <div className="form-group">
              <p>Cidade</p>
              <input type="text" name="category"/>
          </div>
          <div className="form-group">
              <p>Opcões</p>
              <input type="text" name="option" id="options_field"/>
          </div>
          <div className="form-group">
              <p>Resposta</p>
              <input type="text" name="answer"/>
          </div>
          <div className="form-group">
          <CKEditor className="chacha"
               data="<p>Hello from CKEditor 4!</p>"
            />
          </div>  
          <button type="submit">Criar</button>
          <button type="button" onClick={setOption}>Adicionar</button>
      </form> 
  );
}