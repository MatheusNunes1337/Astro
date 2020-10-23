import React from 'react';
import { useParams } from "react-router-dom"

import '../../assets/css/dashboard.css'
import Header from '../../components/dashboard/header'
import Aside from '../../components/dashboard/aside'
import Jumbotron from '../../components/dashboard/jumbotron'

//formulários de criação
import Question from '../../components/dashboard/formQuestion'
import Instituicao from '../../components/dashboard/formInstituicao'
import Postagem from '../../components/dashboard/formPost'


export default function Update() {

	
	let formulario
	const current_url_array = window.location.href.split('/').slice(-2)
	const suffix = current_url_array[0]
	const { id } = useParams()
	

	switch(suffix) {
		case 'question': {
			formulario = <Question isToUpdate="true" questionId={id}/>
			break
		}
		case 'instituicao': {
			formulario = <Instituicao isToUpdate="true" schoolId={id}/>
			break
		}
		case 'post': {
			formulario = <Postagem isToUpdate="true" postId={id}/>
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