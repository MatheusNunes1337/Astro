import React, { useState } from 'react';

import Header from '../components/header'
import Footer from '../components/footer'
import Card from '../components/card'

import '../assets/css/global.css'
import '../assets/css/client.css'

export default function Homepage() {

  let [posts, setPosts] = useState([])	

  /*
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

    },[id])

    */	


  return (
  	<React.Fragment>
	    <Header />
	  	<div className="conteudo">
	  		<h3>Publicações</h3>
	  		<article className="card-wrapper">
	  			<Card planet="Vênus" id={1}/>
	  			<Card planet="Terra" id={2}/>
	  			<Card planet="Urano" id={3}/>
	  			<Card planet="Mercúrio" id={4}/>
	  			<Card planet="Júpiter"/>
	  			<Card planet="Netuno"/>
	  			<Card planet="Saturno"/>
	  			<Card planet="Urano"/>
	  			<Card planet="Vênus"/>
	  			<Card planet="Marte"/>
	  		</article>
	  	</div>
		<Footer />
	</React.Fragment>
  );
}