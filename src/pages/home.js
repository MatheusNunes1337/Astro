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
	  			<Link to="/post/1" className="link"><Card /></Link>
	  			<Card />
	  			<Card />
	  			<Card />
	  			<Card />
	  			<Card />
	  			<Card />
	  			<Card />
	  			<Card />
	  			<Card />
	  		</article>
	  	</div>
		<Footer />
	</React.Fragment>
  );
}