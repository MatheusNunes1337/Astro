import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/global.css'
import '../assets/css/client.css'


export default function Footer() {

  return (
    <footer>
    	<span className="logo">Astro</span>
    	<div className="about">
    		<h3>Sobre</h3>
    		<p className="content">
    			O Astro é uma plataforma educacional de astronomia, 
                que provê informações sobre os planetas do sistema solar e, além disso, dispõe de um quiz interativo para que o aluno teste os seu conhecimento sobre os temas abordados.
    		</p>
    	</div>
    	<p className="icon-attribution">Icons made by <a href="https://www.flaticon.com/authors/monkik" target="_blank">monkik</a>
        from <a href="https://www.flaticon.com" target="_blank"target="_blank">flaticon.com</a>
        </p>
        <p className="img-attribution">Martian Vectors by <a href="https://www.vecteezy.com/free-vector/martian">Vecteezy</a>
        </p>
    	<div className="footer">
    		<p className="copyright">&copy; 2021 Astro</p>
    	</div>
	  </footer>
  );
}