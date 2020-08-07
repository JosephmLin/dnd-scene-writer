import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Task = (props) => {
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            border: '1px solid lightgrey',
            borderRadius: '2px',
            padding: '8px',
            marginBottom: '8px',
            backgroundColor: 'white',
            ...provided.draggableProps.style,
          }}
        >
          {props.task.content}
        </div>
      )}
    </Draggable>
  );
};

export default Task;
