import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fontsource/roboto';
import Game from './components/game';

ReactDOM.render(
  <div style={{
    position: 'absolute', 
    left: '50%', 
    top: '50%',
    transform: 'translate(-50%, -50%)'
  }}>
    <Game />
  </div>,
  document.getElementById('root')
);
