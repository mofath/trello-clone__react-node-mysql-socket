import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import TrelloCard from '../TrelloCard';
import './index.scss';

export default function TrelloList({ title, cards = [], id }) {
  return (
    <Droppable droppableId={title.toLowerCase()}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="trello-list"
        >
          <h4 className="trello-list__title">{title}</h4>
          {
            cards?.length > 0 ?
            cards.map((card, index) => (
              <TrelloCard
                title={card.title}
                text={card.description}
                id={card.id}
                index={index}
                listID={id}
                key={card.id}
              />
            ))
            :
            <div className="trello-list__empty-indicator">
              List has no cards
            </div>
          }
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
