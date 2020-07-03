import React, { useState } from 'react';
import './App.css';
import Scene from './SceneWriter/Scene';
import { Button } from '@material-ui/core';
import { append, pipe, thunkify } from 'ramda';

function App() {
  let [ SCENES, setScenes ] = useState([]);

  const addNewObject = (scene) => pipe(
    append(scene),
    setScenes
  )

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={thunkify(addNewObject('scene')(SCENES))}>Add Scene</Button>
        {
          SCENES.map((scene, index) => (
            <Scene name="default" key={index} />
          ))
        }
      </header>
    </div>
  );
}

export default App;
