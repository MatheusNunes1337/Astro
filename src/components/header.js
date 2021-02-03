import React from 'react';
import download from 'downloadjs'

import { Link } from 'react-router-dom'
import { ImDownload3 } from 'react-icons/im'

import '../assets/css/global.css'
import '../assets/css/client.css'

import api from '../services/api'


export default function Header() {

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
    <header>
  	    <Link to="/home"><span className="logo">
          	Astro
        </span></Link>
        <div className="menu_buttons">
        	<Link to="/quiz/home"><button className="quiz-btn">Quiz</button></Link>
        	<button className="material-btn" onClick={downloadMaterial}>Material</button>
        </div>
	  </header>
  );
}