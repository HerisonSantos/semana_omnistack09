import api from './services/api'
import React, { useState } from 'react';
import logo from './assets/logo.svg';
import './App.css';

function App() {
  const [] = useState('');

  function hanfleSubmit() {

  }
  return (
    <div className="container">
      <img src={logo} alt="Aircnc" />

      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programardores e encontre <strong>talentos</strong> para
      </p>
        <form onSubmit={hanfleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input
          value={email}
            onchange={event => setEmail(event.target.value)}
            type="email" id="email"
            placeholder="seu melhor e-mail" />
          <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
