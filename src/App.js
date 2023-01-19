import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <article class="container">
    <div class="text-container">    
        <span class="typed"></span>
    </div>
        <Link className='button es' to="/inicio">
            Español
        </Link>      

        <Link className='button en' to="/home">
            English
          </Link>
    </article>
      </div>
    );
  }
}

export default App;
