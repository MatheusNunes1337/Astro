import React, { useState, useEffect } from 'react';

import { useHistory, useParams } from 'react-router-dom'

import ReactHtmlParser from 'react-html-parser';

import api from '../services/api'

import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr"

import Header from '../components/header'
import Footer from '../components/footer'

import '../assets/css/global.css'
import '../assets/css/client.css'

export default function Post() {

   let { id } = useParams();
   let history = useHistory();

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
  

  function goToPost(e) {
      const id = e.currentTarget.id
      history.push(`/post/${id}`);
  }
  

  return (
  	<React.Fragment>
	    <Header />
	  	<div className="conteudo">
	  		<article className="post-content">
	  			<section>
	  				{ReactHtmlParser (conteudo)}
	  			</section>	
	  		</article>
	  	</div>
		<Footer />
	</React.Fragment>
  );
}