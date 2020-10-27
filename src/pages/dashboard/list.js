import React from 'react';

import '../../assets/css/dashboard.css'
import Header from '../../components/dashboard/header'
import Aside from '../../components/dashboard/aside'
import Jumbotron from '../../components/dashboard/jumbotron'

//tabelas
//import Question from '../../components/dashboard/formQuestion'
import Instituicao from '../../components/dashboard/tabelas/school'
//import Postagem from '../../components/dashboard/formPost'


export default function Index() {

	
	let tabela
	const suffix = window.location.href.split('/').slice(-1).pop()
	

	switch(suffix) {
		/*
		case 'question': {
			tabela = <Question />
			break
		}
		*/
		case 'instituicoes': {
			tabela = <Instituicao />
			break
		}/*
		case 'postagem': {
			tabela = <Postagem />
			break
		}
		*/
		default: 
		tabela = ''
	}


  return (
  	<React.Fragment>
	    <Aside />
	    <div className="main">
	    	<Header />
	    	<div className="content">
	    		{tabela}
	    	</div>
	    </div>
    </React.Fragment>
  );
}