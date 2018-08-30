import React from 'react';

import './style.css';
import DialogHeader from './DialogHeader';
import DialogContent from './DialogContent';
import DialogActions from './DialogActions';

export default class Dialog extends React.Component {

  static defaultProps = {
    open: false
  };

  static resolvedComponentNames = [
    DialogContent.name,
    DialogHeader.name,
    DialogActions.name
  ]

  dialogRef = $dialog => {
    this.$dialog = $dialog;
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.open && this.props.open) {
      this.$dialog.showModal();
    }
    if (prevProps.open && !this.props.open) {
      this.close();
    }
  }

  close = () => {
    if (typeof this.props.onClose === 'function') {
      this.props.onClose();
    }
    this.$dialog.close();
  }

  backdropClick = ({ clientX, clientY }) => {
    const { top, bottom, left, right } = this.$dialog.getBoundingClientRect();
    const isInDialog = clientY >= top
      && clientY <= bottom
      && clientX >= left
      && clientX <= right;
      if (!isInDialog) {
        this.close();
      }
  };

  getComponentChildren = () => {
    return React.Children
      .toArray(this.props.children)
      .reduce((result, element) => {
        if (Dialog.resolvedComponentNames.includes(element.type.name)) {
          result[element.type.name] = element;
        }
        return result;
      },
      {},
    );
  }

  render() {
    const {
      [DialogHeader.name]: dialogHeader,
      [DialogContent.name]: dialogContent,
      [DialogActions.name]: dialogActions,
    } = this.getComponentChildren();
    return (
      <dialog
        onClick={this.backdropClick}
        ref={this.dialogRef}
        className="dialog"
      >
        <div className="dialog-inside">
          {dialogHeader}
          {dialogContent}
          {dialogActions}
        </div>
      </dialog>
    );
  }
}
