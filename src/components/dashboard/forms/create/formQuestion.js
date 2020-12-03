import React, { useState } from 'react'

import api from '../../../../services/api'

import '../../../../assets/css/global.css'
import '../../../../assets/css/dashboard.css';

import { MdAddCircle, MdDelete } from "react-icons/md"

        
export default function Question(props) {
	 let [options, setOptions] = useState([])
   let [question, setQuestion] = useState('')
   let [category, setCategory] = useState('')
   let [answer, setAnswer] = useState('')

   const token = localStorage.getItem("sToken")
   
  async function handleQuestion(e) {
    e.preventDefault()

    const form = document.getElementById('formQuestion')

    const data = {
      question,
      category,
      options,
      answer
    }

   api.post('question/', data, {
     headers: { Authorization: `Bearer ${token}` }
   })
   .then(response => {
        alert(response.data.message)
        form.reset()
    })
    .catch(err => {
        if (err.response && err.response.data) {
          alert(err.response.data.message)
        }
    })
 }
      

  function addOption() {
    let option = document.getElementById('options_field').value;
    console.log('option:' ,option)
    setOptions(options => [...options, option])
  }

  function resetOptions() {
      setOptions([])
  }


  return (
      <form name="question" id="formQuestion" onSubmit={handleQuestion}>
          <div className="form-group">
              <p>Pergunta</p>
              <input type="text" name="question" value={question} onChange={e => setQuestion(e.target.value)}/>
          </div>
          <div className="form-group">
              <p>Categoria</p>
              <input type="text" name="category" value={category} onChange={e => setCategory(e.target.value)}/>
          </div>
          <div className="form-group">
              <p>Opções</p>
              <input type="text" name="option" id="options_field"/>
              <button type="button" className="optionsBtn" onClick={addOption}><MdAddCircle className="icon optionBtn-icon"/></button>
              <button type="button" className="optionsBtn" onClick={resetOptions}><MdDelete className="icon optionBtn-icon"/></button>
          </div>
          <div className="question_options">
              {options.map((option, i) =>
                <span className="option" key={i}>{ option }</span>
              )}
          </div>
          <div className="form-group">
              <p>Resposta</p>
              <input type="text" name="answer" value={answer} onChange={e => setAnswer(e.target.value)}/>
          </div> 
          <button type="submit">Criar</button>
      </form> 
  );
}