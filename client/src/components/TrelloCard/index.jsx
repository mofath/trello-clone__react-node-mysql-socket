import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './index.scss';

export default function TrelloCard({ text, title, index, id }) {
  return (
    <Draggable draggableId={'card_' + id} index={index}>
      {(provided) => (
        <div
          draggableId={text}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="trello-card"
        >
          <div className="trello-card__content">
            <h3 className="trello-card__title">{title}</h3>
            <h4 className="trello-card__text">{text}</h4>
          </div>
        </div>
      )}
    </Draggable>
  );
}
