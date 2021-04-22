import React, { useState } from 'react';
import download from 'downloadjs'

import Header from '../components/header'
import Footer from '../components/footer'

import '../assets/css/global.css'
import '../assets/css/client.css'

import api from '../services/api'

export default function Download() {

  let [material_type, setMaterial] = useState('')

  async function downloadMaterial(e) {
      e.preventDefault()
      
      const data = {
        material_type
      }

      try {
          const response = await api.post('book/download', data, {
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
                  <input type="radio" id="only-text" name="material" onChange={e => setMaterial(e.target.value)} value="conteudo"/>
                  <label htmlFor="only-text">Apenas o conteúdo</label>
              </div>
              <div className="form-group">
                  <input type="radio" id="text-and-questions" name="material" onChange={e => setMaterial(e.target.value)} value="conteudo_perguntas"/>
                  <label htmlFor="text-and-questions">Conteúdo e perguntas do quiz</label>
              </div>
              <div className="form-group">
                  <input type="radio" id="full-content" name="material" onChange={e => setMaterial(e.target.value)} value="completo"/>
                  <label htmlFor="full-content">Conteúdo, perguntas e respostas do quiz</label>
              </div>
              <button type="submit" className="material-btn">Download</button>
          </form>	
	  	</article>
		<Footer />
	</React.Fragment>
  );
}