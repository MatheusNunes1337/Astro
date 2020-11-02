import React from 'react';
import { Link } from 'react-router-dom'

import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr"

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
	  			<section>
	  				<h1>Lorem ipsum notre dame hsuah</h1>
	  				<p>
	  					Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
	  					Donec ac pulvinar nibh, quis fermentum dui. In sed dui pretium, porta nulla at, dictum est. Ut eget lacinia enim, nec fermentum purus. Maecenas non vestibulum elit. Donec elementum placerat condimentum. 
	  					Aliquam ac nunc neque. Etiam eu lorem vel quam scelerisque mattis at non risu.
	  					Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
	  					Donec ac pulvinar nibh, quis fermentum dui. In sed dui pretium, porta nulla at, dictum est	
	  				</p>
	  				<h2>Start up melhor kdrama?</h2>
	  				<p>
	  					Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
	  					Donec ac pulvinar nibh, quis fermentum dui. In sed dui pretium, porta nulla at, dictum est. Ut eget lacinia enim, nec fermentum purus. Maecenas non vestibulum elit. Donec elementum placerat condimentum. 
	  					Aliquam ac nunc neque. Etiam eu lorem vel quam scelerisque mattis at non risu	
	  				</p>
	  				<p>
	  					Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
	  					Donec ac pulvinar nibh, quis fermentum dui. In sed dui pretium, porta nulla at, dictum est. Ut eget lacinia enim, nec fermentum purus. Maecenas non vestibulum elit. Donec elementum placerat condimentum. 
	  					Aliquam ac nunc neque. Etiam eu lorem vel quam scelerisque mattis at non risu	
	  				</p>
	  				<p>
	  					Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
	  					Donec ac pulvinar nibh, quis fermentum dui. In sed dui pretium, porta nulla at, dictum est. Ut eget lacinia enim, nec fermentum purus. Maecenas non vestibulum elit. Donec elementum placerat condimentum. 
	  					Aliquam ac nunc neque. Etiam eu lorem vel quam scelerisque mattis at non risu	
	  				</p>
	  			</section>
	  			<div className="post-buttons">
	  				<Link to="/" className="link"><button className="previous-post">
	  				<GrFormPreviousLink className="icon"/>
	  				anterior
	  				</button></Link>
	  				<Link to="/" className="link"><button className="next-post">
	  				 próximo
	  				<GrFormNextLink className="icon"/>
	  				</button></Link>
	  			</div>
	  		</article>
	  	</div>
		<Footer />
	</React.Fragment>
  );
}