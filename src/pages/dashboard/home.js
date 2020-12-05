import React from 'react';
import { useHistory } from 'react-router-dom'

import download from 'downloadjs'

import { FaSchool, FaQuestionCircle } from 'react-icons/fa'
import { ImNewspaper, ImDownload3 } from 'react-icons/im'

import api from '../../services/api'

import '../../assets/css/global.css'
import '../../assets/css/dashboard.css'

import Header from '../../components/dashboard/header'
import Aside from '../../components/dashboard/aside'
import Jumbotron from '../../components/dashboard/jumbotron'



export default function Home() {

  const token = localStorage.getItem("aToken")	
  let history = useHistory();

  function goToCreate(e) {
  	 const page = e.currentTarget.value
      history.push(`/dashboard/create/${page}`);
  }

  async function downloadBook() {
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
	    <Aside />
	    <div className="main">
	    	<Header />
	    	<Jumbotron />
	    	<div className="content" style={{background: 'var(--bg-color)'}}>
	    		<div className="buttons">
	    			<button value="post" onClick={goToCreate}>Nova Publicação <ImNewspaper className="dashboard-icon"/></button>
	    			<button value="question" onClick={goToCreate}>Nova Questão <FaQuestionCircle className="dashboard-icon"/></button>
	    			<button value="instituicao" onClick={goToCreate}>Nova Instituição <FaSchool className="dashboard-icon"/></button>
	    			<button onClick={downloadBook}>Baixar Material <ImDownload3 className="dashboard-icon"/></button>
	    		</div>
	    	</div>
	    </div>
    </React.Fragment>
  );
}