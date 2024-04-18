import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Feed from './pages/Feed';
import Profile from './pages/Profile';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Feed} />
        <Route path="/profile" Component={Profile} />
      </Routes>
    </Router>
  );
};

export default App;
