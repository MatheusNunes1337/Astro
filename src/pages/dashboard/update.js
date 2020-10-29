import React from 'react';
import { useParams } from "react-router-dom"

import '../../assets/css/global.css'
import '../../assets/css/dashboard.css'

import Header from '../../components/dashboard/header'
import Aside from '../../components/dashboard/aside'

//formulários de criação
import Question from '../../components/dashboard/forms/update/formQuestion'
import Instituicao from '../../components/dashboard/forms/update/formInstituicao'
import Postagem from '../../components/dashboard/forms/update/formPost'


export default function Update() {

	
	let formulario
	const current_url_array = window.location.href.split('/').slice(-2)
	const suffix = current_url_array[0]
	const { id } = useParams()
	

	switch(suffix) {
		case 'question': {
			formulario = <Question questionId={id}/>
			break
		}
		case 'instituicao': {
			formulario = <Instituicao schoolId={id}/>
			break
		}
		case 'post': {
			formulario = <Postagem postId={id}/>
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