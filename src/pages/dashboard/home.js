import React from 'react';
import { useHistory } from 'react-router-dom'

import { FaSchool, FaQuestionCircle } from 'react-icons/fa'
import { ImNewspaper, ImBook } from 'react-icons/im'

import api from '../../services/api'

import '../../assets/css/global.css'
import '../../assets/css/dashboard.css'

import Header from '../../components/dashboard/header'
import Aside from '../../components/dashboard/aside'
import Jumbotron from '../../components/dashboard/jumbotron'



export default function Home() {
	
  let history = useHistory();

  function goToCreate(e) {
  	 const page = e.currentTarget.value
      history.push(`/dashboard/create/${page}`);
  }

  async function generateBook() {
  	try {
        const response = await api.post('book/generate')
        alert(`${response.data.message}. Para que ele seja efetivamente atualizado, é necessário fazer o build da aplicação.`)
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
	    			<button onClick={generateBook}>Gerar Material <ImBook className="dashboard-icon"/></button>
	    		</div>
	    	</div>
	    </div>
    </React.Fragment>
  );
}