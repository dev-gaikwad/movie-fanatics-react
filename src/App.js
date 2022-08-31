import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MoviesProvider } from './context/MoviesContext';

import Header from './components/Header';
import Main from './components/Main';

function App() {
  const appName = 'Movie Fanatics';

  return (
    <Router>
      <MoviesProvider>
        <Header appName={appName} />
        <Main />
      </MoviesProvider>
    </Router>
  );
}

export default App;
