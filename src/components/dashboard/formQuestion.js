import React, { useState, useEffect } from 'react'
import '../../assets/css/dashboard.css';


export default function Question() {
	

  return (
      <form name="question">
          <div class="form-group">
              <p>Pergunta</p>
              <input type="text" name="question"/>
          </div>
          <div class="form-group">
              <p>Cidade</p>
              <input type="text" name="category"/>
          </div>
          <div class="form-group">
              <p>Opcão 1</p>
              <input type="text" name="option1"/>
          </div>
          <div class="form-group">
              <p>Opcão 2</p>
              <input type="text" name="option2"/>
          </div>
          <div class="form-group">
              <p>Opcão 3</p>
              <input type="text" name="option3"/>
          </div>
          <div class="form-group">
              <p>Opcão 4</p>
              <input type="text" name="option14"/>
          </div>
          <div class="form-group">
              <p>Resposta</p>
              <input type="text" name="answer"/>
          </div>
          <button type="submit">Enviar</button>
      </form> 
  );
}