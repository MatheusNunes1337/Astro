import React from 'react';

import Header from '../components/header'
import Footer from '../components/footer'

import '../assets/css/global.css'
import '../assets/css/client.css'

export default function Sobre() {

  return (
  	<React.Fragment>
	    <Header />
	  	<div className="conteudo">
	  		<article className="about-content">
	  			<section>
	  				  <h1> Sobre o Astro </h1>
              <p>O astro...</p>
	  			</section>	
	  		</article>
	  	</div>
		<Footer />
	</React.Fragment>
  );
}