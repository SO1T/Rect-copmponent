import uuid from 'uuid/v4';

import sections from '../stubs/sections';

export default function sectionsReducer(state = sections, action) {
  switch (action.type) {
    case 'EDIT_CARD': {
      const { card: editedCardData, targetSection: targetSectionIndex, } = action.payload;

      const targetSection = state.find(section => section.id === targetSectionIndex);
      if (!targetSection) {
        return state;
      }

      const editedCardIndex = targetSection.cards.findIndex(c => c.id === editedCardData.id);
      if (editedCardIndex === -1) {
        return;
      }
      const newCards = [
        ...targetSection.cards.slice(0, editedCardIndex),
        { ...targetSection.cards[editedCardIndex], ...editedCardData },
        ...targetSection.cards.slice(editedCardIndex + 1),
      ];
      const editedSection = {
        ...targetSection,
        cards: newCards,
      }

      const editedSectionIndex = state.findIndex(section => section.id === editedSection.id);
      if (editedSectionIndex === -1) {
        return state;
      }
      const newSections = [
        ...state.slice(0, editedSectionIndex),
        { ...state[editedSectionIndex], ...editedSection },
        ...state.slice(editedSectionIndex + 1),
      ];

      return state;
    }

    case 'ADD_CARD': {

      const targetSection = state.find(section => section.id === action.payload);
      if (!targetSection) {
        return state;
      }
      const editedSection = {
        ...targetSection,
        cards: [...targetSection.cards, { id: uuid() }],
      }

      const editedSectionIndex = state.findIndex(section => section.id === editedSection.id);
      if (editedSectionIndex === -1) {
        return state;
      }
      const newSections = [
        ...state.slice(0, editedSectionIndex),
        { ...state[editedSectionIndex], ...editedSection },
        ...state.slice(editedSectionIndex + 1),
      ];

      return newSections;
    }
    case 'MOVE_CARD': {
      const { nextSectionIndex, currentSectionIndex, cardIndex } = action.payload;

      let nextSection = state[nextSectionIndex];
      let currentSection = state[currentSectionIndex];
      nextSection = { ...nextSection, cards: [...nextSection.cards, currentSection.cards[cardIndex]] };
      currentSection = {
        ...currentSection,
        cards: currentSection.cards.filter((_, index) => index !== cardIndex),
      };
      const newSections = nextSectionIndex > currentSectionIndex ? [
        ...state.slice(0, currentSectionIndex),
        currentSection,
        ...state.slice(currentSectionIndex + 1, nextSectionIndex),
        nextSection,
        ...state.slice(nextSectionIndex + 1),
      ] : [
        ...state.slice(0, nextSectionIndex),
        nextSection,
        ...state.slice(currentSectionIndex + 1, currentSectionIndex),
        currentSection,
        ...state.slice(currentSectionIndex + 1),
      ];
      return newSections;
    }
    default:
      return state;
  }
}

export function moveCard(payload) {
  return {
    type: 'MOVE_CARD',
    payload,
  };
}

export function addCard(targetSection) {
  return {
    type: 'ADD_CARD',
    payload: targetSection,
  };
}

export function editCard(targetSection, card) {
  return {
    type: 'EDIT_CARD',
    payload: { targetSection, card },
  };
}
