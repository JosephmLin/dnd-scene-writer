import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SceneHomePage from './SceneWriter/SceneHomePage';
import Sandbox from './drag-and-drop-beautiful/DndProvider';
// import Sandbox2 from './drag-and-drop-beautiful/sandbox';
import UpdateOrCreateNPC from './components/UpdateOrCreateNPCForm/UpdateOrCreateNPC';
import NPCTextarea from './components/NPCTextarea';

function App() {
  // needs react-router at a later time for each of these headers
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      {/* left navigation bar will hold denote the various sessions in the campaign. Each session depicts a set of scenes, NPCs and characters */}
      <Router>
        <Switch>
          <Route exact path="/">
            <SceneHomePage />
          </Route>
          <Route exact path="/create-npc">
            <UpdateOrCreateNPC />
          </Route>
          <Route exact path="/sandbox">
            <NPCTextarea />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
