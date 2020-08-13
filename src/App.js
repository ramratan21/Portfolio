import React from 'react';
import './App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Portfolio from './Components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Portfolio/>
    </div>
  );
}

export default App;
