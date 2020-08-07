import SceneLevel from './SceneLevel';
import { Button } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import './SceneHomePage.css';
import React from 'react';
import sceneHomePageHOC, { storePropKey } from './hoc/sceneHomePageHOC';
import { addIndex, map, pipe, nth, prop } from 'ramda';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const mapIndex = addIndex(map);

function SceneHomePage({
  [storePropKey]: SCENESET,
  addNewSceneDispatch,
  addSceneLevelDispatch,
  moveSceneLevelDispatch,
  moveSceneDispatch,
  removeSceneDispatch,
  removeSceneLevelDispatch,
}) {
  const addSceneLevel = (sceneLevel) => () => {
    const newSceneId = `scene - ${uuidv4()}`;
    // This creates a relationship between scene level and scene
    addSceneLevelDispatch({
      sceneId: newSceneId,
      index: 0,
      sceneLevel,
    });

    // Base definition of a scene
    addNewSceneDispatch({
      id: newSceneId,
    });
  };

  const removeSceneLevel = (index) => {
    const idsOnSceneLevel = pipe(nth(index), prop('scenes'))(SCENESET);
    return () => {
      removeSceneLevelDispatch({
        index,
      });
      map(removeSceneDispatch, idsOnSceneLevel);
    };
  };

  const moveSceneLevel = (fromIndex, toIndex) => {
    moveSceneLevelDispatch({
      fromIndex,
      toIndex,
    });
  };

  const moveScene = (sceneLevel) => (fromIndex, toIndex) => {
    moveSceneDispatch({
      sceneLevel,
      fromIndex,
      toIndex,
    });
  };

  const addScene = (sceneLevel) => () => {
    const newSceneId = `scene - ${uuidv4()}`;
    // This creates a relationship between scene level and scene
    addSceneLevelDispatch({
      sceneId: newSceneId,
      index: -1,
      sceneLevel,
    });

    // Base definition of a scene
    addNewSceneDispatch({
      id: newSceneId,
    });
  };

  const generateSceneLevels = (scenesOnLevel, sceneLevel) => {
    return (
      <SceneLevel
        key={scenesOnLevel.id}
        index={sceneLevel}
        id={scenesOnLevel.id}
        scenes={scenesOnLevel.scenes}
        removeLevel={removeSceneLevel(sceneLevel)}
        moveSceneLevel={moveSceneLevel}
        moveScene={moveScene(sceneLevel)}
        addScene={addScene(sceneLevel)}
      />
    );
  };

  return (
    <div className="SceneHomePage">
      <Button
        className="SceneHomePage-Button"
        onClick={addSceneLevel(SCENESET.length)}
      >
        Add New Scene Level
      </Button>
      <DndProvider backend={HTML5Backend}>
        {mapIndex(generateSceneLevels, SCENESET)}
      </DndProvider>
    </div>
  );
}

export default sceneHomePageHOC(SceneHomePage);
