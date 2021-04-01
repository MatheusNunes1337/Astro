import React, { useState, useEffect } from 'react'

import api from '../../../../services/api'

import '../../../../assets/css/global.css'
import '../../../../assets/css/dashboard.css';

import { MdAddCircle, MdDelete } from "react-icons/md"

        
export default function Question(props) {
	 let [options, setOptions] = useState([])
   let [question, setQuestion] = useState('')
   let [category, setCategory] = useState('')
   let [difficulty, setDifficulty] = useState('')
   let [answer, setAnswer] = useState('')
   let [fullAnswer, setFullAnswer] = useState('')

   const token = localStorage.getItem("aToken")

    useEffect(() => {
        async function getQuestion() {
            try {
              const response =  await api.get(`question?q=${props.questionId}`)
              setOptions(response.data.options)
              setQuestion(response.data.question)
              setCategory(response.data.category)
              setDifficulty(response.data.difficulty)
              setAnswer(response.data.answer)
              setFullAnswer(response.data.fullAnswer)
            } catch(err) {
               console.error(err)
            }
        }  

      getQuestion()

    },[props.questionId])
     
   

  async function handleQuestion(e) {
    e.preventDefault()

    const data = {
      question,
      category,
      difficulty,
      options,
      answer,
      fullAnswer
    }

    api.put(`question/${props.questionId}`, data, {
       headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
        alert(response.data.message)
    })
    .catch(err => {
        if (err.response && err.response.data) {
          alert(err.response.data.message)
        }
     })   
  }

  function addOption() {
    let option = document.getElementById('options_field').value;
    setOptions(options => [...options, option])
  }

  function resetOptions() {
      setOptions([])
  }

  if(question !== '') {
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
                  <p>Dificuldade</p>
                  <select name="school" onChange={e => setDifficulty(e.target.value)}>
                     <option value={difficulty} selected disabled hidden>{difficulty}</option>
                     <option value="fácil">fácil</option>
                     <option value="média">média</option>
                     <option value="difícil">difícil</option>
                  </select>
               </div>
              <div className="form-group">
                  <p>Opções</p>
                  <input type="text" name="option" id="options_field"/>
                  <button type="button" className="optionsBtn" onClick={addOption}><MdAddCircle className="optionBtn-icon"/></button>
                  <button type="button" className="optionsBtn" onClick={resetOptions}><MdDelete className="optionBtn-icon"/></button>
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
              <div className="form-group">
                  <p>Resposta completa</p>
                  <textarea type="text" name="fullAnswer" rows="8" value={fullAnswer} onChange={e => setFullAnswer(e.target.value)}>
                  </textarea>
              </div>  
              <button type="submit">Atualizar</button>
          </form> 
      );
  } else {
      return (
       <p>carregando...</p>
     )
  }
}