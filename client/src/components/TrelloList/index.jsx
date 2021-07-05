import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import TrelloCard from '../TrelloCard';
import './index.scss';

export default function TrelloList({ title, cards }) {
  return (
    <Droppable droppableId={title}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="trello-list"
        >
          <h4>{title}</h4>
          {cards.map((card, index) => (
            <TrelloCard text={card.text} id={card.id} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
