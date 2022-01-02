import React from 'react';
import './App.scss';
import Header from './Components/Header/Header.jsx';
import Homepage from './Pages/HomePage/HomePage.jsx';
import About from './Pages/About/About.jsx';


function App() {
  return (
    <div className="c-app">
        <Header />
        <Homepage />
        <About />
    </div>
  );
}

export default App;
