import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';

import { HTML5Backend } from 'react-dnd-html5-backend';

import { v4 as uuidv4 } from 'uuid';
import CardList from './CardListFunction';
import * as R from 'ramda';

const defaultCards = [
  { id: uuidv4(), text: 'card' },
  { id: uuidv4(), text: 'card' },
  { id: uuidv4(), text: 'card' },
  { id: uuidv4(), text: 'card' },
];

function DndProviderList() {
  const [cards, setCards] = useState(defaultCards);
  const moveCard = (dragIndex, hoverIndex) => {
    // Get the dragged element
    // const draggedImage = cards[dragIndex];
    /*
      - copy the dragged image before hovered element (i.e., [hoverIndex, 0, draggedImage])
      - remove the previous reference of dragged element (i.e., [dragIndex, 1])
      - here we are using this update helper method from immutability-helper package
    */
    setCards(R.move(dragIndex, hoverIndex, cards));
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <CardList cards={cards} moveCard={moveCard}></CardList>
    </DndProvider>
  );
}

export default DndProviderList;
