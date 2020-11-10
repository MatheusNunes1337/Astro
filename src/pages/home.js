import React from 'react';
import { Link } from 'react-router-dom'

import Header from '../components/header'
import Footer from '../components/footer'
import Card from '../components/card'

import '../assets/css/global.css'
import '../assets/css/client.css'

export default function Homepage() {


  return (
  	<React.Fragment>
	    <Header />
	  	<div className="conteudo">
	  		<article className="card-wrapper">
	  			<Link to="/post/1" className="link"><Card planet="Vênus"/></Link>
	  			<Card planet="Terra"/>
	  			<Card planet="Vênus"/>
	  			<Card planet="Urano"/>
	  			<Card planet="Saturno"/>
	  			<Card planet="Mercurio"/>
	  			<Card planet="Marte"/>
	  			<Card planet="Netuno"/>
	  			<Card planet="Urano"/>
	  		</article>
	  	</div>
		<Footer />
	</React.Fragment>
  );
}