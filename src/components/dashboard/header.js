import React from 'react';

import { useHistory } from 'react-router-dom';

import '../../assets/css/global.css'
import '../../assets/css/dashboard.css';


export default function Header() {

  const history = useHistory()

  function logout() {
      history.push('/login')
  }

  return (
    <div className="header">
	    <p>Painel administrativo</p>
	    <button className="logout" onClick={logout}>logout</button>
	</div>
  );
}