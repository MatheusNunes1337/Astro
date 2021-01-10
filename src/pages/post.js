import React, { useState, useEffect } from 'react';

import { useHistory, useParams } from 'react-router-dom'

import { ImDownload3 } from 'react-icons/im'

import ReactHtmlParser from 'react-html-parser';
import download from 'downloadjs'

import api from '../services/api'

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

  async function downloadMaterial() {
     try {
         const response = await api.get('book/download', {
            responseType: 'blob',
                headers: {
                    'Content-Type': 'application/pdf',
                }
         }) 
        download(response.data, 'apostila.pdf')  
     } catch(err) {
       alert(err)
     }
  }
  

  return (
  	<React.Fragment>
	    <Header />
	  	<div className="conteudo">
	  		<article className="post-content">
	  			<section>
	  				{conteudo ? (
              ReactHtmlParser (conteudo)
            ) : (
              <div className="loader" style={{alignSelf: 'center', justifyContent: 'center'}}></div>
            )}
	  			</section>
          <button className="download-book" onClick={downloadMaterial}>Baixar o material completo <ImDownload3 className="download-icon"/></button>	
	  		</article>
	  	</div>
		<Footer />
	</React.Fragment>
  );
}