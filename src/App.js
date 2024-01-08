import 'bootstrap/dist/css/bootstrap.css';
import './styles/style.css';
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Portfolio from './components/portfolio';
import Headers from './components/headers';

class App extends Component {
  render() {
    return (
      <div>
        <div id="container-wrap">
         	<Navbar></Navbar>
				<div>
					<Hero></Hero>
					<About></About>
					<Portfolio></Portfolio>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
