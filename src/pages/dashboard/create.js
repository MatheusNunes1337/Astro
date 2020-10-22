import React from 'react';

import '../../assets/css/dashboard.css'
import Header from '../../components/dashboard/header'
import Aside from '../../components/dashboard/aside'
import Jumbotron from '../../components/dashboard/jumbotron'

//formulários de criação
import Question from '../../components/dashboard/formQuestion'
import Instituicao from '../../components/dashboard/formInstituicao'
import Postagem from '../../components/dashboard/formPost'


export default function Create() {

	
	let formulario
	const suffix = window.location.href.split('/').slice(-1).pop()
	

	switch(suffix) {
		case 'question': {
			formulario = <Question />
			break
		}
		case 'instituicao': {
			formulario = <Instituicao />
			break
		}
		case 'post': {
			formulario = <Postagem />
			break
		}
		default: 
		formulario = ''
	}


  return (
  	<React.Fragment>
	    <Aside />
	    <div className="main">
	    	<Header />
	    	<Jumbotron />
	    	<div className="content">
	    		{formulario}
	    	</div>
	    </div>
    </React.Fragment>
  );
}