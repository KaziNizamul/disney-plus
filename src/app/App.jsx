/* ------------------------------ react things ------------------------------ */
import React from 'react';
import ReactDOM from 'react-dom';
/* ------------------------------- local deps ------------------------------- */
import './App.css';
/* ------------------------------- components ------------------------------- */
import Header from '../components/Header/Header'
import Home from '../components/Home/Home';


function App() { 
  return (
    <div className="App">
      <Header />
      <Home/>
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));
