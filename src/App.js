import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routeConstants';
import { pipe, values, mapObjIndexed } from 'ramda';

const generateRoute = (routeConfig, route) => {
  return (
    <Route exact key={route} path={route}>
      <div className="content">{routeConfig.component()}</div>
    </Route>
  );
};
function App() {
  // needs react-router at a later time for each of these headers
  return (
    <div className="App">
      {/* left navigation bar will hold denote the various sessions in the campaign. Each session depicts a set of scenes, NPCs and characters */}
      <Router>
        <header className="header">
          <Navbar />
        </header>
        <Switch>{pipe(mapObjIndexed(generateRoute), values)(routes)}</Switch>
      </Router>
    </div>
  );
}

export default App;
