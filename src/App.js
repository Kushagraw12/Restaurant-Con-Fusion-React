import React from 'react';
import logo from './logo.svg';
import { Navbar } from 'reactstrap';
import { NavbarBrand } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color='primary'>
        <div className="container">
          <NavbarBrand href="/">Ristornte Con Fusion</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
