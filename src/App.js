import React from 'react';
import './App.css';

import SceneHomePage from './SceneWriter/SceneHomePage';
import SortableParent from './SceneWriter/drag-and-drop/SortableParent';
import SortableObject from './SceneWriter/drag-and-drop/SortableObject';

function App() {
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
        <SortableParent
          id="sortableParent-1"
          className="sortableParent"
        >
          <SortableObject
            id="sortableObject-1"
            className="sortableObject"
            draggable="true"
          >
            Hello World #1;
          </SortableObject>
        </SortableParent>
        <SortableParent
          id="sortableParent-2"
          className="sortableParent"
        >
          <SortableObject
            id="sortableObject-2"
            className="sortableObject"
            draggable="true"
          >
            Hello World #2
          </SortableObject>
        </SortableParent>
      </div>

    </div>
  );
}

export default App;
