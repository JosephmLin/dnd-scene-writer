import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SceneHomePage from './SceneWriter/SceneHomePage';
import Sandbox from './drag-and-drop-beautiful/DndProvider';
// import Sandbox2 from './drag-and-drop-beautiful/sandbox';
import UpdateOrCreateNPC from './components/UpdateOrCreateNPCForm/UpdateOrCreateNPC';
import NPCTextarea from './components/NPCTextarea';
import MixedTextArea from './tagify/TaggableTextarea';

function App() {
  const defaultwhitelist = [
    {
      value: 'Joe-Doe',
    },
    {
      value: 'abc',
    },
  ];
  const defaultlogger = (e) => console.log('we loggin: ', e);
  // needs react-router at a later time for each of these headers
  return (
    <div className="App">
      <Navbar />
      {/* left navigation bar will hold denote the various sessions in the campaign. Each session depicts a set of scenes, NPCs and characters */}
      <div className="MainPage">
        {/* <SceneHomePage /> */}
        {/* <UpdateOrCreateNPC /> */}
        <MixedTextArea whitelist={defaultwhitelist} />
        <NPCTextarea />
        {/* <HOC /> */}
        {/* <SortablePage /> */}
        {/* <Sandbox /> */}
      </div>
    </div>
  );
}

export default App;
