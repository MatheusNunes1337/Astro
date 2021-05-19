import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom'

import Header from '../components/header'
import Footer from '../components/footer'

import api from '../services/api'
import db from '../services/localbase'

import '../assets/css/global.css'
import '../assets/css/client.css'

export default function SolarSystem() {
  let [posts, setPosts] = useState(null)
  let history = useHistory();

  useEffect(() => {
        async function getPost() {
            try {
              if(navigator.onLine) {
	               	const response =  await api.get('post')
	              	setPosts(response.data)
	            } else {
	            	const posts = await db.collection('posts').get()
	            	console.log('postagens', posts)
	               	setPosts(posts)
	            }
            } catch(err) {
               console.error(err)
            }
        }  

      getPost()

    },[])

  function goToPost(e) {
  	console.log(posts)
    const planeta = e.currentTarget.id
    const post = posts.filter(post => {
         return post.planeta === planeta         
    })
    const { _id } = post[0]
    history.push(`/post/${_id}`)
  }

  return (
    <React.Fragment>
      <Header />
    	<div className="solarSystem-bg">
          <button onClick={goToPost} id="Mercúrio">mercury</button>
          <button onClick={goToPost} id="Vênus">venus</button>
          <button onClick={goToPost} id="Terra">earth</button>
          <button onClick={goToPost} id="Marte">mars</button>
          <button onClick={goToPost} id="Júpiter">jupiter</button>
          <button onClick={goToPost} id="Saturno">saturn</button>
          <button onClick={goToPost} id="Urano">uranus</button>
          <button onClick={goToPost} id="Netuno">neptune</button>
      </div>
      <Footer />
  </React.Fragment>
  );
}