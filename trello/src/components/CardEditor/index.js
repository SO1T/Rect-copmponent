import { withHandlers, compose } from 'recompose';

import CardEditor from './CardEditor';

export default compose(
  withHandlers({
    onChange: props => event => {
      props.onChange(event.target.value);
    }
  })
)(CardEditor);
