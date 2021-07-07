import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './index.scss';

export default function TrelloCard({ title, text, index, id, listID }) {
  return (
    <Draggable draggableId={id} index={index} className="trello-card__draggable">
      {(provided) => (
        <div
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
