import React from 'react';

import Header from '../components/header'
import Footer from '../components/footer'
import Card from '../components/card'

import '../assets/css/global.css'
import '../assets/css/client.css'

export default function Post() {


  return (
  	<React.Fragment>
	    <Header />
	  	<div className="conteudo">
	  		<article className="post-content">
	  			<div className="previous-post"></div>
	  			<div className="next-post"></div>
	  		</article>
	  	</div>
		<Footer />
	</React.Fragment>
  );
}