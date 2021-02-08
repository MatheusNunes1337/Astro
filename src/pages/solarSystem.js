import React from 'react';

import { useHistory } from 'react-router-dom'

import '../assets/css/global.css'
import '../assets/css/client.css'

export default function SolarSystem() {

   let history = useHistory();

  return (
  	<div className="solarSystem-bg">
        <button id="mercury">mercury</button>
        <button id="venus">venus</button>
        <button id="earth">earth</button>
        <button id="mars">mars</button>
        <button id="jupiter">jupiter</button>
        <button id="saturn">saturn</button>
        <button id="uranus">uranus</button>
        <button id="neptune">neptune</button>
    </div>
  );
}