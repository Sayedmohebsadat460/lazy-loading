import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Button from './useble';
const AboutPage = lazy(() => import('./components/AboutPage'));

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/about"
            element={
              <Suspense fallback={<div>Loading About Page...</div>}>
                <AboutPage />
              </Suspense>
            }
          />
        </Routes>
        <div>
      <Button text="Submit" onClick={handleClick} />
      <Button text="Cancel" onClick={() => alert('Canceled')}  />
    </div>
      </div>
    </Router>
  );
};

export default App;
