import { compose, withHandlers, withState } from 'recompose';
import { connect } from 'react-redux';

import  { moveCard, addCard, editCard } from '../../reducers/sections';
import Desk from './Desk';

const LEFT_KEY = 37;
const RIGHT_KEY = 39;
export default compose(
  connect(({ sections }) => ({
    sections,
  }), {
    moveCard,
    addCard,
    editCard,
  }),
  withState('draggedCardInfo', 'setDraggedCardInfo', null),
  withHandlers({
  onChangeSection: ({ sections, onChange }) => editedSection => {
    const editedSectionIndex = sections.findIndex(section => section.id === editedSection.id);
    if (editedSectionIndex === -1) {
      return;
    }
    const newSections = [
      ...sections.slice(0, editedSectionIndex),
      { ...sections[editedSectionIndex], ...editedSection },
      ...sections.slice(editedSectionIndex + 1),
    ];
    onChange(newSections);
    },
  }),
  withHandlers({
    changeCardSection: props => ({ keyCode }) => {
      if (!props.draggedCardInfo) {
        return;
      }
      const currentSectionIndex = props.sections.findIndex(section => section.id === props.draggedCardInfo.sectionId);
      const cardIndex = props.sections[currentSectionIndex].cards.findIndex(card => card.id === props.draggedCardInfo.cardId)
      let nextSectionIndex = 0;
      if (keyCode === LEFT_KEY && currentSectionIndex !== 0) {
        nextSectionIndex = currentSectionIndex - 1;
      }
      if (keyCode === RIGHT_KEY && currentSectionIndex !== props.sections.length - 1) {
        nextSectionIndex = currentSectionIndex + 1;
      }
      if (currentSectionIndex === nextSectionIndex) {
        return;
      }

      props.setDraggedCardInfo({
        cardId: props.draggedCardInfo.cardId,
        sectionId: nextSectionIndex,
      });
      props.moveCard({ nextSectionIndex, currentSectionIndex, cardIndex });
    },
  })
)(Desk);
