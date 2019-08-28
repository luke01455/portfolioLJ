import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
function App() {
  return (
   
    <div className="App">
      <BrowserRouter>
      <Header />
      <Route exact path='/' component={HomePage}/>
      </BrowserRouter>


    </div>
  );
}

export default App;
