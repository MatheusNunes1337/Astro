import React from 'react';

import '../../assets/css/dashboard.css'
import Header from '../../components/dashboard/header'
import Aside from '../../components/dashboard/aside'
import Jumbotron from '../../components/dashboard/jumbotron'

//tabelas
import Question from '../../components/dashboard/formQuestion'
import Instituicao from '../../components/dashboard/formInstituicao'
import Postagem from '../../components/dashboard/formPost'


export default function Index() {

	
	let tabela
	const suffix = window.location.href.split('/').slice(-1).pop()
	

	switch(suffix) {
		case 'question': {
			tabela = <Question />
			break
		}
		case 'instituicao': {
			tabela = <Instituicao />
			break
		}
		case 'postagem': {
			tabela = <Postagem />
			break
		}
		default: 
		tabela = ''
	}


  return (
  	<React.Fragment>
	    <Aside />
	    <div className="main">
	    	<Header />
	    	<Jumbotron />
	    	<div className="content">
	    		
	    	</div>
	    </div>
    </React.Fragment>
  );
}