import React from 'react';

import '../../assets/css/global.css'
import '../../assets/css/dashboard.css'

import Header from '../../components/dashboard/header'
import Aside from '../../components/dashboard/aside'

//tabelas
import Question from '../../components/dashboard/tabelas/question'
import Instituicao from '../../components/dashboard/tabelas/school'
import Post from '../../components/dashboard/tabelas/post'
import Student from '../../components/dashboard/tabelas/student'
//import Postagem from '../../components/dashboard/formPost'


export default function List() {

	
	let tabela
	const suffix = window.location.href.split('/').slice(-1).pop()
	

	switch(suffix) {
		case 'questions': {
			tabela = <Question />
			break
		}
		case 'instituicoes': {
			tabela = <Instituicao />
			break
		}
		case 'posts': {
			tabela = <Post />
			break
		}
		case 'students': {
			tabela = <Student />
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
	    	<div className="content">
	    		{tabela}
	    	</div>
	    </div>
    </React.Fragment>
  );
}