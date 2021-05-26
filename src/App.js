import React from 'react';
import "../src/stylesheet/App.css"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePage';
import Header from './components/Header';
import Sign from './components/Sign';
import Register from './components/Register';



function App() {
  return (
  <Router className="App">
  <Switch>

    <Route path="/user-signin">
       <Header />
       <Sign />
    </Route>

    <Route path="/user-signup">
       <Register />
    </Route>

    <Route path="">
      <HomePage />
      
 
    </Route>

  </Switch>
  </Router>

  );
}

export default App;
