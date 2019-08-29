import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import About from './components/about/about.component';
import Footer from './components/footer/footer.component';
import Skills from './components/skills/skills.components';
import ProjectsPage from './pages/projectspage/projects-page.component';

function App() {
  return (
   
    <div className="App">
      <HashRouter>
      <Header />
      <Route path='/' component={HomePage}/>
      <Route exact path='/' component={About}/>
      <Route path='/about' component={About}/>
      <Route path='/skills' component={Skills}/>
      <Route path='/projects' component={ProjectsPage}/>
      <Footer />
      </HashRouter>

    </div>
  );
}

export default App;
