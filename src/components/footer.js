import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/global.css'
import '../assets/css/client.css'


export default function Footer() {

  return (
    <footer>
    	<div className="logo"></div>
    	<div className="about">
    		<h3>Sobre</h3>
    		<p className="content">
    			O astro é uma plataforma de astronomia que provém informações sobre os planetas do sistema solar.
                Além disso, permite que o aluno teste o seu conhecimento através de um quiz.
    		</p>
    	</div>
    	<p className="icon-attribution">Icons made by <a href="https://www.flaticon.com/authors/monkik">monkik</a>
        from <a href="https://www.flaticon.com">flaticon.com</a>
        </p>
        <p className="img-attribution">Martian Vectors by <a href="https://www.vecteezy.com/free-vector/martian">Vecteezy</a>
        </p>
    	<div className="footer">
    		<p className="copyright">&copy; 2020 Astro</p>
    	</div>
	  </footer>
  );
}