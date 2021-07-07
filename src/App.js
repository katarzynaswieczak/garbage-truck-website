import React from 'react';
import "../src/stylesheet/App.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import Header from './components/Header';
import Sign from './components/Sign';
import Register from './components/Register';
import FeedItem from './components/FeedItem';
import Banner from './components/Banner';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './components/AuthProvider';
import Dashboard from './components/Dashboard';
import Modal from './components/Modal';


function App() {
  return (
    <AuthProvider>
      <Router className="App">
        <Switch>
       
          <Route path="/user-signin">
            <Sign />
          </Route>

          <Route path="/user-signup">
            <Register />
          </Route>

<Route path="/add">
<Modal />
</Route>
     
 <Route path="">
          <Header />
<Banner />
<FeedItem/>
          </Route>
      
          <PrivateRoute path="/dashboard" component={Dashboard} />

        </Switch>
      </Router>
    </AuthProvider>

  );
}

export default App;
