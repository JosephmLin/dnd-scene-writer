import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initialData';
import Column from './Column';

class DndProvider extends React.Component {
  state = initialData;

  // If functional, then use `useCallback` hook
  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const originalFromColumn = this.state.columns[source.droppableId];
    const originalToColumn = this.state.columns[destination.droppableId];
    const newFromTaskIds = Array.from(originalFromColumn.taskIds);
    const newToTaskIds = Array.from(originalToColumn.taskIds);

    newFromTaskIds.splice(source.index, 1);
    newToTaskIds.splice(destination.index, 0, draggableId);

    const newFromColumn = {
      ...originalFromColumn,
      taskIds: newFromTaskIds,
    };
    const newToColumn = {
      ...originalToColumn,
      taskIds: newToTaskIds,
    };
    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [originalFromColumn.id]: newFromColumn,
        [originalToColumn.id]: newToColumn,
      },
    };
    this.setState(newState);
  };

  render() {
    return (
      <DragDropContext
        // onDragStart onDragUpdate
        onDragEnd={this.onDragEnd}
      >
        {this.state.columnOrder.map((columnId) => {
          const column = this.state.columns[columnId];
          const columnTasks = column.taskIds.map(
            (taskId) => this.state.tasks[taskId]
          );
          return <Column key={column.id} column={column} tasks={columnTasks} />;
        })}
      </DragDropContext>
    );
  }
}

export default DndProvider;
