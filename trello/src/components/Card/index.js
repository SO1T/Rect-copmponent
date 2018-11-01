import React from 'react';
import { compose, withState, branch, renderComponent, mapProps, withHandlers, lifecycle, renameProp } from 'recompose';

import Card from './Card';
import CardEditor from '../CardEditor';

const withHoverHandling = Component => ({ setShowEditButton,  ...props }) => (
  <div
    onMouseEnter={() => setShowEditButton(true)}
    onMouseLeave={() => setShowEditButton(false)}
    >
    <Component {...props} />
  </div>
);

const withShowingEditHover = compose(
  withState('showEditButton', 'setShowEditButton', false),
  withHoverHandling,
);

const withEditing = compose(
  withState('isEditing', 'setEditingMode', false),
  mapProps(({ onChange: onChangeCardInfo, ...props }) => ({ ...props, onChangeCardInfo })),
  renameProp('text', 'outerText'),
  withState('text', 'onChange', props => props.outerText),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      if (nextProps.outerText !== this.props.outerText) {
        nextProps.onChange(nextProps.outerText);
      }
    }
  }),
  withHandlers({
    onSave: ({ id, text, onChangeCardInfo, setEditingMode }) => () => {
      onChangeCardInfo({ id, text });
      setEditingMode(false);
    }
  }),
  branch(({ isEditing }) => isEditing, renderComponent(CardEditor)),
  mapProps(({ isEditing, ...props }) => props)
);



export default compose(withShowingEditHover, withEditing)(Card);
