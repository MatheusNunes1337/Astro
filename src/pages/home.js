import React from 'react';

import Header from '../components/header'
import Footer from '../components/footer'

import '../assets/css/global.css'
import '../assets/css/client.css'

export default function Homepage() {


  return (
  	<React.Fragment>
	    <Header />
	  	<div className="content">
	  		<p>content</p>
	  	</div>
		<Footer />
	</React.Fragment>
  );
}