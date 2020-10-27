import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserGraduate, FaSchool, FaQuestionCircle,  } from 'react-icons/fa'
import { ImNewspaper } from 'react-icons/im'

import '../../assets/css/dashboard.css';


export default function Aside() {
  return (
    <aside>
       <picture>
            
        </picture>
        <nav>
            <ul>
                <li><ImNewspaper className="nav-icon"/><Link to="/dashboard" className="link">Postagens</Link></li>
                <li><FaQuestionCircle className="nav-icon"/><Link to="/ambiente/bedroom1" className="link">Perguntas</Link></li>
                <li><FaUserGraduate className="nav-icon"/><Link to="/ambiente/bedroom1" className="link">Alunos</Link></li>
                <li><FaSchool className="nav-icon"/><Link to="/ambiente/bedroom1" className="link">Instituições</Link></li>
            </ul>
            <button>Logout</button>
        </nav>
    </aside>
  );
}