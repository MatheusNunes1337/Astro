import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaUserGraduate, FaSchool, FaQuestionCircle,  } from 'react-icons/fa'
import { ImNewspaper } from 'react-icons/im'

import '../../assets/css/global.css'
import '../../assets/css/dashboard.css';


export default function Aside() {

  const history = useHistory()

  function logout() {
      history.push('/login')
  }

  return (
    <aside>
        <span className="logo">Astro</span>
        <nav>
            <ul>
                <li><ImNewspaper className="icon nav-icon"/><Link to="/dashboard/posts" className="link">Postagens</Link></li>
                <li><FaQuestionCircle className="icon nav-icon"/><Link to="/dashboard/questions" className="link">Perguntas</Link></li>
                <li><FaUserGraduate className="icon nav-icon"/><Link to="/dashboard/students" className="link">Alunos</Link></li>
                <li><FaSchool className="icon nav-icon"/><Link to="/dashboard/instituicoes" className="link">Instituições</Link></li>
            </ul>
            <button onClick={logout}>Logout</button>
        </nav>
    </aside>
  );
}