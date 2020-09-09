import React from 'react';
import { map, addIndex } from 'ramda';
import SceneCard from './SceneCard';
import { Button } from '@material-ui/core';
import './SceneLevel.css';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import DraggableTypes from '../../constants/DraggableTypes';

const mapIndex = addIndex(map);
/**
 * This component represents one Droppable , with a Draggable Component inside of it.
 *
 *
 */
function SceneLevel(props) {
  const generateSceneCard = (provided, snapshot) => (sceneId, index) => {
    return (
      <div
        key={sceneId}
        ref={provided.innerRef}
        style={{
          margin: '8px',
          backgroundColor: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
        }}
      >
        <SceneCard
          isDragging={snapshot.isDragging}
          className="SceneCard"
          appendNewScene={props.appendNewScene}
          id={sceneId}
          index={index}
        />
      </div>
    );
  };

  return (
    <Draggable draggableId={props.id} index={props.index}>
      {(provided) => (
        <div
          className="SceneLevel"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            ...provided.draggableProps.style,
          }}
        >
          <div className="SceneCards">
            <Droppable droppableId={props.id} type={DraggableTypes.SCENE_CARD}>
              {(provided, snapshot) => {
                return (
                  <>
                    {mapIndex(
                      generateSceneCard(provided, snapshot),
                      props.scenes
                    )}
                    {provided.placeholder}
                  </>
                );
              }}
            </Droppable>
          </div>
          <Button
            className="DeleteButton"
            variant="contained"
            color="secondary"
            size="small"
            onClick={props.removeLevel}
          >
            Delete
          </Button>
        </div>
      )}
    </Draggable>
  );
}

export default SceneLevel;
