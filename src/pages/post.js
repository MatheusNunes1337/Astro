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
   let [previous, setPrevious] = useState('')
   let [next, setNext] = useState('')

   
   useEffect(() => {
        async function getPost() {
            try {
              const posts =  await api.get('post')
              const ids = posts.data.map(post => {
              	let { _id } = post
              	return _id
              })
              console.log(ids)
              const current_index = ids.indexOf(id)
              if(current_index === 0) {
              	setPrevious(ids[ids.length - 1])
              	console.log('anterior', previous) 
              }
              setPrevious(ids[current_index - 1])
              setNext(ids[current_index + 1])
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
	  			<div className="post-buttons">
	  				<button className="previous-post" id={previous} onClick={goToPost}>
	  				<GrFormPreviousLink className="icon"/>
	  				anterior
	  				</button>
	  				<button className="next-post" id={next} onClick={goToPost}>
	  				 próximo
	  				<GrFormNextLink className="icon"/>
	  				</button>
	  			</div>	
	  		</article>
	  	</div>
		<Footer />
	</React.Fragment>
  );
}