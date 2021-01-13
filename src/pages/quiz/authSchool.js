import React, {useState, useEffect} from 'react';

import { useHistory, Link } from 'react-router-dom'

import RegisterSchoolForm from '../../components/quiz/authForm/register'
import LoginSchoolForm from '../../components/quiz/authForm/login'

import api from '../../services/api'

import '../../assets/css/global.css'
import '../../assets/css/client.css'


export default function AuthSchool() {

  let [form, setForm] = useState(<LoginSchoolForm />)
  let [age, setAge] = useState('')
  let [school, setSchool] = useState('')

 
     

  return (
    <div className="quiz-bg">
        {form}
    </div>
  );   
}
