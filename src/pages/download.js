import React, { useState } from 'react';
import download from 'downloadjs'

import Header from '../components/header'
import Footer from '../components/footer'

import '../assets/css/global.css'
import '../assets/css/client.css'

import api from '../services/api'

export default function Download() {

  let [material, setMaterial] = useState('')

  async function downloadMaterial(e) {
      e.preventDefault()

      try {
          const response = await api.get(`book/download?material=${material}`, {
              responseType: 'blob',
                  headers: {
                      'Content-Type': 'application/pdf',
                  }
           }) 
          download(response.data, 'material.pdf')  
      } catch(err) {
         alert(err)
        }
  }

  return (
  	<React.Fragment>
	    <Header />
	  		<article className="download-content">
	  			<form onSubmit={downloadMaterial}>
              <h1>Selecione o conteúdo do material:</h1>
              <div className="form-group">
                  <input type="radio" id="only-text" name="apostila" onChange={e => setMaterial(e.target.value)} value="material3"/>
                  <label htmlFor="only-text">Apenas o conteúdo</label>
              </div>
              <div className="form-group">
                  <input type="radio" id="text-and-questions" name="apostila" onChange={e => setMaterial(e.target.value)} value="material2"/>
                  <label htmlFor="text-and-questions">Conteúdo e perguntas do quiz</label>
              </div>
              <div className="form-group">
                  <input type="radio" id="full-content" name="apostila" onChange={e => setMaterial(e.target.value)} value="material1"/>
                  <label htmlFor="full-content">Conteúdo, perguntas e respostas do quiz</label>
              </div>
              <button type="submit" className="material-btn">Download</button>
          </form>	
	  	</article>
		<Footer />
	</React.Fragment>
  );
}