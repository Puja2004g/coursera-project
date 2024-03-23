import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import './App.css';
import Nav from "./components/Nav"
import Main from "./components/Main"
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
      <Nav/>
      <Main />
      <Menu/>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
