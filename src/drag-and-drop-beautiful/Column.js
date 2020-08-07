import React from 'react';
import Task from './Task';

import { Droppable } from 'react-beautiful-dnd';

const Column = (props) => {
  return (
    <div
      style={{
        margin: '8px',
        border: '1px solid lightgrey',
        borderRadius: '2px',
        minHeight: '50%',
      }}
    >
      <div
        style={{
          margin: '8px',
        }}
      >
        {props.column.title}
      </div>
      <Droppable droppableId={props.column.id}>
        {(provided, snapshot) => {
          return (
            <div
              ref={provided.innerRef}
              style={{
                margin: '8px',
                backgroundColor: snapshot.isDraggingOver
                  ? 'lightblue'
                  : 'lightgrey',
              }}
              // {...provided.droppableProps}
            >
              {/* can be monkeypatched */}
              {props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {/* {provided.placeholder} */}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
};

export default Column;
