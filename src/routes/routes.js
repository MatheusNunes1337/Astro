import React from 'react';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

import Home from '../pages/dashboard/home'
import Create from '../pages/dashboard/create'
import Update from '../pages/dashboard/update'
import List from '../pages/dashboard/list'
import Login from '../pages/login'
import Homepage from '../pages/home'
import Post from '../pages/post'
import Index from '../pages/index'
import Quiz from '../pages/quiz/quiz'
import Auth from '../pages/quiz/auth'
import QuizResult from '../pages/quiz/result'

export default function Routes () {

	return (
		<Router> 
  			<Switch>
		 		<Route path="/dashboard/create/instituicao">
		 			<Create />
		 		</Route>
		 		<Route path="/dashboard/create/question">
		 			<Create />
		 		</Route>
			    <Route path="/dashboard/create/post">
			       <Create />
			     </Route>
			    <Route path="/dashboard/update/question/:id">
			       <Update />
			    </Route>
				<Route path="/dashboard/update/post/:id">
				    <Update />
				</Route>
		   		<Route path="/dashboard/update/instituicao/:id">
		     		<Update />
		   		</Route>
		   		<Route path="/dashboard/instituicoes">
		     		<List />
		   		</Route>
		   		<Route path="/dashboard/questions">
		     		<List />
		   		</Route>
		   		<Route path="/dashboard/posts">
		     		<List />
		   		</Route>
		   		<Route path="/dashboard/students">
		     		<Index />
		   		</Route>
		     	<Route path="/login">
		       		<Login />
		     	</Route>
		     	<Route path="/post/:id">
		     		<Post />
		   		</Route>
		 		<Route path="/dashboard/">
	 				<Home />
	 			</Route>
	 			<Route path="/home">
		       		<Homepage />
		     	</Route>
		     	<Route path="/quiz/auth">
		       		<Auth />
		     	</Route>
		     	<Route path="/quiz/result">
		       		<QuizResult />
		     	</Route>
		     	<Route path="/quiz">
		       		<Quiz />
		     	</Route>
		     	<Route path="/">
		       		<Index />
		     	</Route>
  			</Switch>	
		</Router>
	);
}