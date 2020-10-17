import React from 'react';
import '../../assets/css/dashboard.css';


export default function Header() {
  return (
    <div className="dash_header">
	    <p>Painel administrativo</p>
	    <button className="logout">logout</button>
	</div>
  );
}