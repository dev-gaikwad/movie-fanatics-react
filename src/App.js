import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';

function App() {
  const appName = 'Movie Fanatics';
  return (
    <Router>
      <Header appName={appName} />
      <Main />
    </Router>
  );
}

export default App;
