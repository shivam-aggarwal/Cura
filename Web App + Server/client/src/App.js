import React from 'react';
import {Route} from 'react-router-dom';

import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/home/Home';
import Food from './components/food/Food';
function App() {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/food" component={Food} />
    </div>
  );
}

export default App;
