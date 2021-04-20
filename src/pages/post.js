import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom'

import ReactHtmlParser from 'react-html-parser';

import api from '../services/api'

import Header from '../components/header'
import Footer from '../components/footer'

import '../assets/css/global.css'
import '../assets/css/client.css'

export default function Post() {

   let { id } = useParams();

   let [conteudo, setConteudo] = useState('')
   
   useEffect(() => {
        async function getPost() {
            try {
              const post =  await api.get(`post?p=${id}`)
              setConteudo(post.data.conteudo)
            } catch(err) {
               console.error(err)
            }
        }  

      getPost()

    },[id])
  
  return (
  	<React.Fragment>
	    <Header />
				{conteudo ? (
          <article className="post-content">
              <section>
                  {ReactHtmlParser (conteudo)}
              </section> 
          </article>       
        ) : (
          <div className="loader_container">
              <div className="loader"></div>
          </div>
        )}	
		<Footer />
	</React.Fragment>
  );
}