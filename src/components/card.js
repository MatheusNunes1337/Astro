import React from 'react';

import { useHistory } from 'react-router-dom'

import '../assets/css/global.css'
import '../assets/css/client.css'

//icons
import mercurio from '../assets/images/mercury.png'
import venus from '../assets/images/venus.png'
import terra from '../assets/images/earth.png'
import marte from '../assets/images/mars.png'
import jupiter from '../assets/images/jupiter.png'
import saturno from '../assets/images/saturn.png'
import netuno from '../assets/images/neptune.png'
import urano from '../assets/images/uranus.png'


export default function Card(props) {
	let history = useHistory();
  let planeta

  switch (props.planet) {
  	 case 'Mercúrio': 
  	 	planeta = mercurio
  	 	break
  	 case 'Vênus': 
  	 	planeta = venus
  	 	break
  	case 'Terra': 
  	 	planeta  = terra
  	 	break 		
  	case 'Marte': 
  	 	planeta = marte
  	 	break
  	case 'Júpiter': 
  	 	planeta = jupiter
  	 	break 
  	case 'Saturno': 
  	 	planeta = saturno
  	 	break
  	case 'Netuno': 
  	 	planeta = netuno
  	 	break
  	case 'Urano': 
  	 	planeta = urano
  	 	break 	
  	default: 
  		planeta = saturno 	 	 	 		 
  }


  function goToPost(e) {
      const id = e.currentTarget.id
      history.push(`/post/${id}`);  //window.open
      localStorage.setItem("previous_page", "/home")
  }



  return ( 
    <button className="post-card" id={props.id} onClick={goToPost}>
  	  	<img src={planeta} alt={props.planet} className="card-icon" />
  	  	<p className="card-title">{props.title}</p>
	</button>
  );
}