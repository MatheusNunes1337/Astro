import React from 'react';

import '../../assets/css/global.css'
import '../../assets/css/dashboard.css'

import Header from '../../components/dashboard/header'
import Aside from '../../components/dashboard/aside'

//formulários de criação
import Question from '../../components/dashboard/forms/create/formQuestion'
import Instituicao from '../../components/dashboard/forms/create/formInstituicao'
import Postagem from '../../components/dashboard/forms/create/formPost'


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
	    	<div className="content">
	    		{formulario}
	    	</div>
	    </div>
    </React.Fragment>
  );
}