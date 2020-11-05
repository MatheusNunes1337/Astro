import React from 'react';

import '../assets/css/global.css'
import '../assets/css/client.css'

//icons
import saturno from '../assets/images/saturno.png'


export default function Card() {

  return ( 
    <div className="post-card">
  	  	<img src={saturno} className="card-icon" />
  	  	<p className="card-title">O título irá aqui é verdade meu caro amigo, dragon ball, pois é matheus.</p>
	</div>
  );
}