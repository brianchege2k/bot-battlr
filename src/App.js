import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BotCollection from './components/BotCollection';
import BotSpecs from './components/BotSpecs';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" component={BotCollection} />
          <Route path="/bots/:botId" element={<BotSpecs/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
