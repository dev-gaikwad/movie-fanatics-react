import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MoviesProvider } from './context/MoviesContext';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import InfoPage from './pages/InfoPage';

function App() {
  return (
    <MoviesProvider>
      <Router>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <Header />
                <Main />
                <Footer />
              </>
            }
          ></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/info' element={<InfoPage />}></Route>
        </Routes>
      </Router>
    </MoviesProvider>
  );
}

export default App;
