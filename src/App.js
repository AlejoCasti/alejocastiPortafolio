import React from 'react'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Project from './components/pages/projects/Project'
import Home from './components/pages/home/Home'
import About from './components/pages/about/About'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/projects' component={Project}/>
          <Route path='/about' exact component={About}/>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
