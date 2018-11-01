import React from 'react';
import Section from '../Section';
import './style.css';

const Desk = ({ sections, onMove, draggedCardInfo, setDraggedCardInfo, changeCardSection }) => (
  <div className="board" tabIndex="0" onKeyDown={changeCardSection}>
    <div className="wrapper">
      {
        sections.map(section => (
          <Section
            onCardMove={onMove}
            key={section.id}
            onChange={onChangeSection}
            draggedCardInfo={draggedCardInfo}
            setDraggedCardInfo={setDraggedCardInfo}
            {...section}
           />
        ))
      }
    </div>
  </div>
);

Desk.defaultProps = {
  sections: [],
};

export default Desk;
