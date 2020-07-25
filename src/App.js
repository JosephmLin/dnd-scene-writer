import React from 'react';
import './App.css';

import SceneHomePage from './SceneWriter/SceneHomePage';
import SortablePage from './drag-and-drop/SortablePage';

function App() {
  // needs react-router at a later time for each of these headers
  return (
    <div className="App">
      <header className="App-header">
        <div className="menu">
          Menu
        </div>
        <div className="login">
          Login
        </div>
        <div>
          View Campaigns
        </div>
      </header>
      {/* left navigation bar will hold denote the various sessions in the campaign. Each session depicts a set of scenes, NPCs and characters */}
      <div className="MainPage">
        <SceneHomePage />
        {/* <SortablePage /> */}
      </div>

    </div>
  );
}

export default App;
