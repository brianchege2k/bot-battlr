// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BotCollection from './components/BotCollection';
import BotSpecs from './components/BotSpecs';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<BotCollection />} />
          <Route path="/bots/:botId" component={BotSpecs} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
