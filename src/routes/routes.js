import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";


import Home from '../pages/dashboard/home'
import Create from '../pages/dashboard/create'
import Update from '../pages/dashboard/update'
import List from '../pages/dashboard/list'
import Login from '../pages/login'
import Homepage from '../pages/home'
import SolarSystem from '../pages/solarSystem'
import Sobre from '../pages/sobre'
import Post from '../pages/post'
import Index from '../pages/index'
import Quiz from '../pages/quiz/quiz'
import Answers from '../pages/quiz/answers'
import AuthStudent from '../pages/quiz/authStudent'
import LoginSchool from '../pages/quiz/school/loginSchool'
import RegisterSchool from '../pages/quiz/school/registerSchool'
import PasswordForm from '../pages/quiz/school/passwordForm'
import QuizIndex from '../pages/quiz/index'
import QuizResult from '../pages/quiz/result'
import StudentsResult from '../pages/quiz/school/studentsResult'

function CustomRoute(props) {
	const deviceWidth = window.innerWidth
	const aToken = localStorage.getItem('aToken')
	const sToken = localStorage.getItem('sToken')
	const iToken = localStorage.getItem('iToken')
	const recoverPass = localStorage.getItem('recoverPass')
	if(props.onlyAdmin && !aToken) {
		return <Redirect to="/login" />
	} else if(props.onlyStudent && !sToken) {
		return <Redirect to="/quiz/auth/student" />
	} else if(props.onlySchool && !iToken) {
		return <Redirect to="/quiz/auth/school/login" />
	} else if(props.onlyRecover && !recoverPass) {
		return <Redirect to="/quiz/auth/school/login" />
	} else if (props.onlyLargeScreens && deviceWidth <= 768)
		return <Redirect to="/home" />
	else {
		return <Route {...props} />
	}
}


export default function Routes () {

	return (
		<Router> 
  			<Switch>
		 		<CustomRoute onlyAdmin path="/dashboard/create/instituicao">
		 			<Create />
		 		</CustomRoute>
		 		<CustomRoute onlyAdmin path="/dashboard/create/question">
		 			<Create />
		 		</CustomRoute>
			    <CustomRoute onlyAdmin path="/dashboard/create/post">
			       <Create />
			     </CustomRoute>
			    <CustomRoute onlyAdmin path="/dashboard/update/question/:id">
			       <Update />
			    </CustomRoute>
				<CustomRoute onlyAdmin path="/dashboard/update/post/:id">
				    <Update />
				</CustomRoute>
		   		<CustomRoute onlyAdmin path="/dashboard/update/instituicao/:id">
		     		<Update />
		   		</CustomRoute>
		   		<CustomRoute onlyAdmin path="/dashboard/instituicoes">
		     		<List />
		   		</CustomRoute>
		   		<CustomRoute onlyAdmin path="/dashboard/questions">
		     		<List />
		   		</CustomRoute>
		   		<CustomRoute onlyAdmin path="/dashboard/posts">
		     		<List />
		   		</CustomRoute>
		   		<CustomRoute onlyAdmin path="/dashboard/students">
		     		<List />
		   		</CustomRoute>
		     	<Route path="/login">
		       		<Login />
		     	</Route>
		     	<Route path="/post/:id">
		     		<Post />
		   		</Route>
		 		<CustomRoute onlyAdmin path="/dashboard/">
	 				<Home />
	 			</CustomRoute>
	 			<Route path="/home">
		       		<Homepage />
		     	</Route>
		     	<CustomRoute onlyLargeScreens path="/solar-system">
		       		<SolarSystem />
		     	</CustomRoute>
		     	<Route path="/sobre">
		       		<Sobre />
		     	</Route>
		     	<Route path="/quiz/auth/student">
		       		<AuthStudent />
		     	</Route>
		     	<Route path="/quiz/auth/school/login">
		       		<LoginSchool />
		     	</Route>
		     	<CustomRoute onlyRecover path="/quiz/auth/school/recover/pass">
		       		<PasswordForm />
		     	</CustomRoute>
		     	<Route path="/quiz/auth/school/register">
		       		<RegisterSchool />
		     	</Route>
		     	<Route path="/quiz/home">
		       		<QuizIndex />
		     	</Route>
		     	<CustomRoute onlySchool path="/quiz/result/students">
		       		<StudentsResult />
		     	</CustomRoute>
		     	<CustomRoute onlyStudent path="/quiz/result">
		       		<QuizResult />
		     	</CustomRoute>
		     	<CustomRoute onlyStudent path="/quiz/answers">
		       		<Answers />
		     	</CustomRoute>
		     	<CustomRoute onlyStudent path="/quiz">
		       		<Quiz />
		     	</CustomRoute>
		     	<Route path="/">
		       		<Index />
		     	</Route>
  			</Switch>	
		</Router>
	);
}