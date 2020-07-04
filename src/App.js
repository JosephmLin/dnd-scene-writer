import React, { useState } from 'react';
import './App.css';
import SceneCard from './SceneWriter/SceneCard';
import { Button } from '@material-ui/core';
import { __, append, pipe, indexOf, remove, juxt, identity, inc, tap, apply } from 'ramda';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [ SCENES, setScenes ] = useState([]);

  const addNewScene = (objType) => () => pipe(
    append(`${objType} - ${uuidv4()}`),
    setScenes
  )(SCENES);

  // [] => sliced SCENES
  const sliceSetScenes = apply(remove(__, __, SCENES));

  const removeObject = key => () => {
    pipe(
      indexOf(key),
      juxt([ identity, inc ]),
      sliceSetScenes,
      setScenes
    )(SCENES);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button className="App-button" onClick={addNewScene('scene')}>Add Scene</Button>
        {SCENES.map((scene) => (<SceneCard name="" key={scene} removeObject={removeObject(scene)} />))}
      </header>
    </div>
  );
}

export default App;
