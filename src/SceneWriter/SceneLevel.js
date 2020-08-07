import React, { useRef } from 'react';
import { map, addIndex } from 'ramda';
import SceneCard from './SceneCard';
import { Button } from '@material-ui/core';
import { useDrop, useDrag } from 'react-dnd';
import { TYPES } from './constants/DraggableTypes';
import './SceneLevel.css';

const mapIndex = addIndex(map);

function SceneLevel(props) {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: TYPES.SCENE_LEVEL,
    hover(item) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = props.index;
      if (dragIndex !== hoverIndex) {
        props.moveSceneLevel(dragIndex, hoverIndex);
        item.index = hoverIndex;
      }
    },
  });

  // useDrag will be responsible for making an element draggable. It also exposes "isDragging" method to add any styles while dragging
  const [{ isDragging }, drag] = useDrag({
    item: { type: TYPES.SCENE_LEVEL, id: props.id, index: props.index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  /* 
Initialize drag and drop into the element using its reference.
Here we initialize both drag and drop on the same element (i.e., card component)
*/
  drag(drop(ref));
  const generateSceneCard = (scene, index) => {
    return (
      <SceneCard
        className="SceneCard"
        moveScene={props.moveScene}
        id={scene.id}
        index={index}
        key={scene}
        addScene={props.addScene}
      />
    );
  };

  return (
    <div className="SceneLevel" style={{ opacity: isDragging ? 0.5 : 1 }}>
      <div className="SceneCards">
        {mapIndex(generateSceneCard, props.scenes)}
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
  );
}

export default SceneLevel;
