import React, { useState, useEffect } from 'react'
import '../../assets/css/dashboard.css';


export default function Instituicao() {
	

  return (
      <form name="Instituicao">
          <div class="form-group">
              <p>Nome</p>
              <input type="text" name="nome"/>
          </div>
          <div class="form-group">
              <p>Cidade</p>
              <input type="text" name="cidade"/>
          </div>
          <div class="form-group">
              <p>Estado</p>
              <input type="text" name="estado"/>
          </div>
          <div class="form-group">
              <p>Responsavel</p>
              <input type="text" name="responsavel"/>
          </div>
          <div class="form-group">
              <p>E-mail do responsavel</p>
              <input type="email" name="email_resp"/>
          </div>
          <button type="submit">Criar</button>
      </form>
  );
}