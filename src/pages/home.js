import React, { useState, useEffect } from 'react';

import Header from '../components/header'
import Footer from '../components/footer'
import Card from '../components/card'

import api from '../services/api'

import '../assets/css/global.css'
import '../assets/css/client.css'

export default function Homepage() {

  let [posts, setPosts] = useState(null)	

  useEffect(() => {
        async function getPost() {
            try {
              const response =  await api.get('post')
              setPosts(response.data)
            } catch(err) {
               console.error(err)
            }
        }  

      getPost()

    },[])

  if(posts) {
	  return (
	  	<React.Fragment>
		    <Header />
		  	<div className="conteudo">
		  		<h3>Publicações</h3>
		  		<article className="card-wrapper">
		  			{
		  				posts.map(post => {
		  					return(<Card planet={post.planeta} id={post._id} title={post.titulo}/>)
		  				})
		  			}
		  		</article>
		  	</div>
			<Footer />
		</React.Fragment>
	  );
    } else {
    	return(
			<p>Carregando...</p>	  
    	)
    }	  
}