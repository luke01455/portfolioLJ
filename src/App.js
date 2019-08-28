import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import About from './components/about/about.component';

function App() {
  return (
   
    <div className="App">
      <HashRouter>
      <Header />
      <Route path='/' component={HomePage}/>
      <Route exact path='/' component={About}/>
      <Route path='/about' component={About}/>
      </HashRouter>

    </div>
  );
}

export default App;
