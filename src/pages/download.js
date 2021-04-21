import React, { useState } from 'react';
import download from 'downloadjs'

import Header from '../components/header'
import Footer from '../components/footer'

import '../assets/css/global.css'
import '../assets/css/client.css'

import api from '../services/api'

export default function Download() {

  let [material, setMaterial] = useState('')

  async function downloadMaterial() {
     try {
         const response = await api.get('book/download', {
            responseType: 'blob',
                headers: {
                    'Content-Type': 'application/pdf',
                }
         }) 
        download(response.data, 'apostila.pdf')  
     } catch(err) {
       alert(err)
     }
  }

  return (
  	<React.Fragment>
	    <Header />
	  		<article className="download-content">
	  			<form>
              <h1>Selecione o conteúdo do material:</h1>
              <div className="form-group">
                  <input type="radio" id="only-text" name="material" onChange={e => setMaterial(e.target.value)} value="only-text"/>
                  <label for="only-text">Apenas o conteúdo</label>
              </div>
              <div className="form-group">
                  <input type="radio" id="text-and-questions" name="material" onChange={e => setMaterial(e.target.value)} value="text-and-questions"/>
                  <label for="text-and-questions">Conteúdo e perguntas do quiz</label>
              </div>
              <div className="form-group">
                  <input type="radio" id="full-content" name="material" onChange={e => setMaterial(e.target.value)} value="full"/>
                  <label for="full-content">Conteúdo, perguntas e respostas do quiz</label>
              </div>
              <button className="material-btn" onClick={downloadMaterial}>Download</button>
          </form>	
	  	</article>
		<Footer />
	</React.Fragment>
  );
}