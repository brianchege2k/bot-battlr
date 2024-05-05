import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={BotCollection} />
          <Route path="/your-bot-army" component={YourBotArmy} />
          <Route path="/bots/:botId" component={BotSpecs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
