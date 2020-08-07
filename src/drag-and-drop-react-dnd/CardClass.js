import { DragSource } from 'react-dnd';
import React from 'react';

/**
 * Specifies the drag source contract.
 * Only `beginDrag` function is required.
 */
const cardSource = {
  beginDrag(props) {
    // Return the data describing the dragged item
    const item = { id: props.id };
    console.log('HELLO WORLD BEGIN');
    return item;
  },

  endDrag(props, monitor, component) {
    console.log('HELLO WORLD');
    // if (!monitor.didDrop()) {
    //   console.log('DID NOT DROP');
    //   return;
    // }
    // When dropped on a compatible target, do something
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    console.log(monitor);
    console.log(dropResult);
    props.moveObject(item.id, dropResult.listId);
  },
};

/**
 * Specifies which props to inject into your component.
 */
const collect = (connect, monitor) => ({
  dragSource: connect.dragSource(),
  dragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
});

class Card extends React.Component {
  // Your component receives its own props as usual
  render() {
    // isDragging and connectDragSource injected by React DnD,
    // as defined by your `collect` function above:
    // const { id, isDragging, connectDragSource, card } = this.props;
    const { id, position, dragSource, isDragging } = this.props;
    // const display = isDragging ? 'none' : 'block';
    const opacity = isDragging ? 0.5 : 1;

    return connectDragSource(
      <div
        style={{
          padding: '5px',
          backgroundColor: 'coral',
          opacity: opacity,
          // display: display,
        }}
      >
        I am a draggable card number {id}
        {isDragging && ' (and I am being dragged now)'}
      </div>
    );
  }
}

// Export the wrapped version
export default DragSource('CARD2', cardSource, collect)(Card);
