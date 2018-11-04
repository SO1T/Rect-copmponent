import { compose, withHandlers, mapProps } from 'recompose';

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
      props.onCardAdd(props.id);
    },
    onEditCard: props => editedCardData => {
      props.onCardEdit(props.id, editedCardData);
    },
  }),
  mapProps(({ setCards, ...props }) => props)
);

export default compose(withAddingCard)(Section);
