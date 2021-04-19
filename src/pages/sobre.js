import React from 'react';

import Header from '../components/header'
import Footer from '../components/footer'

import '../assets/css/global.css'
import '../assets/css/client.css'

export default function Sobre() {

  return (
  	<React.Fragment>
	    <Header />
	  		<article className="about-content">
	  			<section>
	  				  <h1> Sobre o Astro </h1>
              		  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              		  Sed ultricies nisl sed eros porttitor, sit amet finibus erat vulputate. 
              		  Integer fringilla ultricies velit, ut imperdiet mi. Maecenas pulvinar neque at fringilla laoreet. 
              		  Suspendisse laoreet mauris erat, sed rutrum mi semper a. 
              		  Nulla non euismod ligula, ac congue mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
              		  Donec vulputate ullamcorper mauris, sit amet scelerisque turpis ornare eu. 
              		  Cras gravida varius eros, sed porta eros dignissim suscipit. Aenean quis ligula justo. Donec congue consectetur quam. Suspendisse nec sagittis diam, et gravida lorem. 
              		  Morbi finibus turpis a lorem volutpat, eget semper purus aliquet. Integer ornare at velit ut ullamcorper. 
              		  Donec vestibulum accumsan purus id imperdiet. Nulla facilisi. Vivamus vel purus quam.</p>
              		  <p>Nunc eu mauris at odio dignissim commodo. 
              		  Nullam non turpis dictum, volutpat neque ut, pharetra velit. 
              		  Mauris ac nunc aliquet, commodo magna quis, ornare tellus. 
              		  Sed viverra nibh et mi fringilla tincidunt. Ut quis laoreet sapien, nec vehicula felis. 
              		  Nam iaculis eget magna in ultrices. Suspendisse sed dictum urna. Duis et placerat est. In vel tincidunt purus. 
              		  Phasellus vel condimentum nibh. Curabitur consectetur ac ex ut feugiat. Fusce a venenatis purus, ac vehicula lacus.</p>
              		  <p>In consequat, massa vitae venenatis pulvinar, neque massa varius urna, eu laoreet erat felis a est. 
              		  Nunc bibendum, enim ac venenatis commodo, orci metus tempor nulla, eu luctus mi odio quis dui. 
              		  Duis convallis libero eget nulla elementum, ac ultricies turpis ultricies. 
              		  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
              		  Nullam nibh mi, posuere ac dignissim in, faucibus et lorem. Integer ut pulvinar erat, quis ultricies nibh. 
              		  Vestibulum imperdiet mauris tortor, vitae blandit velit convallis vel.</p>
              		  <p>Proin ultricies ut felis vulputate efficitur. In augue tellus, bibendum eget dui at, suscipit maximus nisi. 
              		  Pellentesque tristique magna nulla, id pellentesque libero congue ut. 
              		  Aenean turpis sem, tempor ut imperdiet dignissim, consectetur condimentum ex. 
              		  Mauris euismod consectetur cursus. Nullam quam tellus, viverra sed tellus ut, tincidunt molestie nisl. 
              		  Pellentesque vitae suscipit justo, sed varius urna. Nullam at tempor tortor. Proin scelerisque massa id venenatis pellentesque. 
              		  Sed placerat elit ac massa bibendum consectetur. Sed tellus lacus, pretium at orci et, lobortis pulvinar augue. 
              		  Cras a vestibulum mi, at varius mi. Etiam eu dapibus diam, non fermentum arcu.</p>
	  			</section>	
	  	</article>
		<Footer />
	</React.Fragment>
  );
}