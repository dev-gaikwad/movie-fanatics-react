import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContentProvider } from './context/ContentContext';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SearchDisplay from './components/SearchDisplay';
import AboutPage from './pages/AboutPage';
import InfoPage from './pages/InfoPage';

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
                <Main />
                <Footer />
              </>
            }
          ></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/info' element={<InfoPage />}></Route>
          <Route path='/search' element={<SearchDisplay />}></Route>
        </Routes>
      </Router>
    </ContentProvider>
  );
}

export default App;
