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
    			A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em 
    			latim utilizado na produção gráfica para preencher os espaços de texto em 
    			publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real
    		</p>
    	</div>
    	<p className="icon-attribution">Icons made by <a href="https://www.flaticon.com/authors/monkik">monkik</a>
        from <a href="https://www.flaticon.com">flaticon.com</a>
        </p>
    	<div className="footer">
    		<p className="copyright">&copy; 2020 Astro</p>
    	</div>
	  </footer>
  );
}