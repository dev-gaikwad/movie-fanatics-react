import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContentProvider } from './context/ContentContext';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import InfoPage from './pages/InfoPage';
import Navbar from './components/shared/Navbar';

function App() {
  return (
    <ContentProvider>
      <Router>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <Header />
                <Navbar />
                <Main />
                <Footer />
              </>
            }
          ></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/info' element={<InfoPage />}></Route>
        </Routes>
      </Router>
    </ContentProvider>
  );
}

export default App;
