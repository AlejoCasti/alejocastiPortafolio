import React from 'react'; 
import Redes from './components/redes/Redes'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Project from './components/projects/Project'
import Home from './components/home/home'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='header'>
          <Redes/>
          <Navbar/>
        </div>
        <Switch>
          <Route path='/projects' component={Project}/>
          <Route path='/' exact component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
