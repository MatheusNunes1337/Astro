import React from 'react';

import '../assets/css/global.css'
import '../assets/css/client.css'


export default function Footer() {

  return (
    <footer>
  	  	<div className="about"></div>
        <div className="footer">
            <p className="copyright">&copy; 2020 Astro</p>
            <p className="icon-attribution">icon made by FreePik from flaticon.com</p>
        </div>
	  </footer>
  );
}