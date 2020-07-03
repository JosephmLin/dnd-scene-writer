import React, { useState } from 'react';
import './App.css';
import SceneCard from './SceneWriter/SceneCard';
import { Button } from '@material-ui/core';
import { append, pipe } from 'ramda';

function App() {
  const [ SCENES, setScenes ] = useState([]);

  const addNewObject = (scene) => () => pipe(
    append(scene),
    setScenes
  )(SCENES);

  return (
    <div className="App">
      <header className="App-header">
        <Button className="App-button" onClick={addNewObject('scene')}>Add Scene</Button>
        {
          SCENES.map((scene, index) => <SceneCard name="" key={index} />)
        }
      </header>
    </div>
  );
}

export default App;
