import React from 'react';

import '../../assets/css/dashboard.css'
import Header from '../../components/dashboard/header'
import Aside from '../../components/dashboard/aside'
import Jumbotron from '../../components/dashboard/jumbotron'
;


export default function Home() {
  return (
  	<React.Fragment>
	    <Aside />
	    <div className="main">
	    	<Header />
	    	<Jumbotron />
	    	<div className="content">
	    		<p>oi</p>
	    	</div>
	    </div>
    </React.Fragment>
  );
}