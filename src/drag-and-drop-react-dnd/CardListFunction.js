import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import Card from './CardFunction';

const CardList = (props) => {
  const renderCard = (card, index) => {
    return (
      <Card
        moveCard={props.moveCard}
        key={`${card.id} - card`}
        card={card}
        index={index}
      >
        {card.text}
      </Card>
    );
  };

  return <section className="card-list">{props.cards.map(renderCard)}</section>;
};

export default CardList;
