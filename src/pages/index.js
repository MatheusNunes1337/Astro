import React, { useState } from 'react';
import { Link } from 'react-router-dom'


import '../assets/css/global.css'
import '../assets/css/client.css'

export default function Index() {
	return (
		<div class="index-background">
			<div class="title">
	    		<h1>Astro</h1>
	    		<p>Explore o seu conhecimento</p>
	    		<Link to="/home"><button>Entrar</button></Link>
	  		</div>
		</div>
	)	
}