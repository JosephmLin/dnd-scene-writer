import SceneLevel from './SceneLevel';
import { Button } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import './SceneHomePage.css';
import React, { useCallback, useEffect } from 'react';
import sceneHomePageHOC, { storePropKey } from './hoc/sceneHomePageHOC';
import { addIndex, map, pipe, nth, prop } from 'ramda';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import DraggableTypes from '../../constants/DraggableTypes';

const mapIndex = addIndex(map);

// This component handles ALL of the layout functionality.
function SceneHomePage({
  [storePropKey]: SCENESET,
  addNewSceneDispatch,
  addSceneLevelDispatch,
  changeLayoutDispatch,
  removeSceneDispatch,
  removeSceneLevelDispatch,
  fetchNpcs,
}) {
  useEffect(() => {
    fetchNpcs();
  }, []);
  const addSceneLevel = (sceneLevelIndex) => () => {
    const newSceneId = `scene - ${uuidv4()}`;
    // This creates a relationship between scene level and scene
    addSceneLevelDispatch({
      sceneId: newSceneId,
      index: 0,
      sceneLevelIndex,
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

  const addScene = (sceneLevelIndex) => () => {
    const newSceneId = `scene - ${uuidv4()}`;
    // This creates a relationship between scene level and scene
    addSceneLevelDispatch({
      sceneId: newSceneId,
      index: -1,
      sceneLevelIndex,
    });

    // Base definition of a scene
    addNewSceneDispatch({
      id: newSceneId,
    });
  };

  const generateSceneLevels = (provided, snapshot) => (
    scenesOnLevel,
    sceneLevelIndex
  ) => {
    return (
      <div
        ref={provided.innerRef}
        {...provided.droppableProps}
        style={{
          border: '1px solid lightgrey',
          borderRadius: '2px',
          marginBottom: '8px',
          backgroundColor: 'white',
          width: 'max-content',
        }}
        key={scenesOnLevel.id}
      >
        <SceneLevel
          index={sceneLevelIndex}
          id={scenesOnLevel.id}
          scenes={scenesOnLevel.scenes}
          isDragging={snapshot.isDragging}
          removeLevel={removeSceneLevel(sceneLevelIndex)}
          appendNewScene={addScene(sceneLevelIndex)}
        />
      </div>
    );
  };

  const onDragEnd = useCallback(
    ({ destination, draggableId, source, type }) => {
      changeLayoutDispatch({
        source,
        destination,
        type,
        draggableId,
      });
    },
    [changeLayoutDispatch]
  );

  return (
    <div className="SceneHomePage">
      <Button
        className="SceneHomePage-Button"
        onClick={addSceneLevel(SCENESET.length)}
      >
        Add New Scene Level
      </Button>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="DroppableContainer">
          <Droppable
            droppableId="scene-levels"
            type={DraggableTypes.SCENE_LEVEL}
          >
            {(provided, snapshot) => {
              return (
                <>
                  {mapIndex(generateSceneLevels(provided, snapshot), SCENESET)}
                  {provided.placeholder}
                </>
              );
            }}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
}

export default sceneHomePageHOC(SceneHomePage);
