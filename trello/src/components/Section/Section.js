import React from 'react';
import Card from '../Card';
import './style.css';

const Section = ({ id, cards, title, onAddCard, onEditCard, draggedCardInfo, setDraggedCardInfo }) => (
  <section className="section">
    <header>{title}</header>
    <div className="body">
      {
        cards.map(card => (
          <Card
            isActive={draggedCardInfo && draggedCardInfo.cardId === card.id}
            onClick={() =>
              setDraggedCardInfo(draggedCardInfo && card.id === draggedCardInfo.cardId ? null : {
                sectionId: id,
                cardId: card.id,
              })
            }
            onChange={onEditCard}
            key={card.id}
            {...card} />
        ))
      }
    </div>
    <footer>
      <button onClick={onAddCard} className="add-card">Add card...</button>
    </footer>
  </section>
);

Section.defaultProps = {
  cards: [],
  setDraggedCardInfo: () => {},
}

export default Section;
