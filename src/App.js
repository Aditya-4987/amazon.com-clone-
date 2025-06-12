import './App.css';
import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      {/*   HEADER */}
      <Header />

      {/*   HOME */}
      <Home />
    </div>
  );
}

export default App;
