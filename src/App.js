import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SceneHomePage from './SceneWriter/SceneHomePage';
import DndProviderList from './drag-and-drop-react-dnd/DndProviderList';
import Sandbox from './drag-and-drop-beautiful/DndProvider';
// import Sandbox2 from './drag-and-drop-beautiful/sandbox';
import UpdateOrCreateNPC from './components/UpdateOrCreateNPCForm/UpdateOrCreateNPC';

function App() {
  // needs react-router at a later time for each of these headers
  return (
    <div className="App">
      <Navbar />
      {/* left navigation bar will hold denote the various sessions in the campaign. Each session depicts a set of scenes, NPCs and characters */}
      <div className="MainPage">
        {/* <SceneHomePage /> */}
        {/* <UpdateOrCreateNPC /> */}
        {/* <HOC /> */}
        {/* <SortablePage /> */}
        <Sandbox />
        {/* <Sandbox2 /> */}
      </div>
    </div>
  );
}

export default App;
