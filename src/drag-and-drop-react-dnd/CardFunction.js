import React, { useRef } from 'react';
import { useDrop, useDrag } from 'react-dnd';

const type = 'Card'; // Need to pass which type element can be draggable, its a simple string or Symbol. This is like an Unique ID so that the library know what type of element is dragged or dropped on.

const Card = ({ card, index, moveCard }) => {
  const ref = useRef(null); // Initialize the reference

  // useDrop hook is responsible for handling whether any item gets hovered or dropped on the element
  const [, drop] = useDrop({
    // Accept will make sure only these element type can be droppable on this element
    accept: type,
    hover(item) {
      // item is the dragged element
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      // current element where the dragged element is hovered on
      const hoverIndex = index;
      // If the dragged element is hovered in the same place, then do nothing
      if (dragIndex === hoverIndex) {
        return;
      }
      // If it is dragged around other elements, then move the card and set the state with position changes
      moveCard(dragIndex, hoverIndex);
      /*
			Update the index for dragged item directly to avoid flickering
			when the card was half dragged into the next
		*/
      item.index = hoverIndex;
    },
  });

  // useDrag will be responsible for making an element draggable. It also expose, isDragging method to add any styles while dragging
  const [{ isDragging }, drag] = useDrag({
    // item denotes the element type, unique identifier (id) and the index (position)
    item: { type, id: card.id, index },
    // collect method is like an event listener, it monitors whether the element is dragged and expose that information
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  /* 
    Initialize drag and drop into the element using its reference.
    Here we initialize both drag and drop on the same element (i.e., card component)
  */
  drag(drop(ref));

  // Add the reference to the element
  return (
    <div
      ref={ref}
      style={{
        padding: '5px',
        backgroundColor: 'coral',
        opacity: isDragging ? 0 : 1,
      }}
      className="file-item"
    >
      <img alt={`img - ${card.id}`} src={card.src} className="file-img" />
    </div>
  );
};

export default Card;
