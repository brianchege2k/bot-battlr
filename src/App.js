import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<BotCollection />} />
          <Route path="/your-bot-army" component={YourBotArmy} />
          <Route path="/bots/:botId" component={BotSpecs} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
