import { compose, withHandlers, withState, mapProps } from 'recompose';
import uuid from 'uuid/v4';

import Section from './Section';

const withAddingCard =  compose(
  withHandlers({
    setCards: props => cards => {
      props.onChange({
        id: props.id,
        title: props.title,
        cards,
      });
    }
  }),
  withHandlers({
    onAddCard: props => () => {
      const newCards = [...props.cards, { id: uuid() }];
      props.setCards(newCards);
    },
    onEditCard: ({ cards, setCards }) => editedCardData => {
      const editedCardIndex = cards.findIndex(card => (card.id === editedCardData.id));
      if (editedCardIndex === -1) {
        return;
      }
      const newCards = [
        ...cards.slice(0, editedCardIndex),
        { ...cards[editedCardIndex], ...editedCardData},
        ...cards.slice(editedCardIndex + 1),
      ];
      setCards(newCards);
    },
  }),
  mapProps(({ setCards, ...props }) => props)
);

export default compose(withAddingCard)(Section);
