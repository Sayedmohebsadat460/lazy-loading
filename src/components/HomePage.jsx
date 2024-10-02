import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="text-center">
      <h1>Welcome to Home Page</h1>
      <nav>
        <Link to="/">Home Page</Link> | <Link to="/about">About Page</Link>
      </nav>
    </div>
  );
};

export default HomePage;
