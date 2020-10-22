import React, { useState } from 'react';

import api from '../services/api'

import '../assets/css/dashboard.css'

export default function Login() {
  let [username, setUsername] = useState('')
  let [password, setPassword] = useState('')

  async function handleLogin(e) {
  	e.preventDefault()

  	const data = {
  		username,
  		password
  	}
  	console.log(data)

  	try {
  		const response = await api.post('auth/login', data)
  		console.log(response.data)
  	} catch(err) {
  		alert(err)
  	}
  }

  return (
  	<React.Fragment>
	    <div className="login-bg">
	    	<form id="adm_form" onSubmit={handleLogin}>
		        <p>Login</p>
		        <input type="text" name="username" onChange={e => setUsername(e.target.value)} placeholder="username"/>
		        <input type="password" name="password" onChange={e => setPassword(e.target.value)} placeholder="password"/>
		        <button type="submit">Login</button>
    		</form>
	    </div>
    </React.Fragment>
  );
}