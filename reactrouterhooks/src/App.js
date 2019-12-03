import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/Aboutus';
import User from './pages/User';

function App() {
  return (
    <Router>
    <div className="App">
    <header>
      <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to={
          {
            pathname:"/about",
            state:{
              from:'root'
            }
          }
        }>About</Link>
      </li>
      <li>
        <Link to='/user/john/cena'>User</Link>
      </li>
      </ul>
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/user/:firstname/:lastname" component={User}/>
      </Switch>
      </div>
     </header> 
    </div>
    </Router>
  );
}

export default App;
