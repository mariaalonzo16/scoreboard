import React from 'react';

import Stats from './Stats';

import Stopwatch from './Stopwatch';

import '../App.css';

const Header = ({ players, title}) => {
  return (
    <header>
      <Stats players= {players}/>
      <h1>{ title }</h1> 
      <Stopwatch />
    </header>
  );
}

export default Header;