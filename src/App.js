import React from 'react';

import Header from './components/Header';
import LandingPage from './components/landingpage';
import SignupPage from './components/signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
    <Header />
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={LandingPage}></Route>
        <Route path="/signup" component={SignupPage}></Route>
      </Switch>
    </React.Fragment>
  </Router>

  );
}

export default App;






/*import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/landingpage/Hero';
import About from './components/landingpage/dependencies/About';
import Features from './components/Features';


function App() {
  return (
  <div>
    <Header/>
    <Hero/>
    <About/>
    <Features/>


  </div>

  );
}


 <React.Fragment>
      <Header/>
      <LandingPage/>
    </React.Fragment>
export default App;*/
