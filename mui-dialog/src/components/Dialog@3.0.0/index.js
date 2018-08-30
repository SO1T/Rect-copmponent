import React from 'react';

import './style.css';

export default class Dialog extends React.Component {

  static defaultProps = {
    open: false
  };

  static resolvedPropertyNames = [
    'actions',
    'content',
    'header'
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
        const resolvedElementProperty = Object.keys(element.props).find(prop =>
          Dialog.resolvedPropertyNames.includes(prop)
        );
        if (resolvedElementProperty) {
          const elementColectionName = `${resolvedElementProperty}Children`;
          if (!result[elementColectionName]) {
            result[elementColectionName] = []
          }
          result[elementColectionName] = [...result[elementColectionName], element];
        }
        return result;
      },
      {},
    );
  }

  render() {
    const {
      headerChildren,
      contentChildren,
      actionsChildren,
    } = this.getComponentChildren();
    return (
      <dialog
        onClick={this.backdropClick}
        ref={this.dialogRef}
        className="dialog"
      >
        <div className="dialog-inside">
          <section className="dialog-header">{headerChildren}</section>
          <section className="dialog-content">{contentChildren}</section>
          <section className="dialog-actions">{actionsChildren}</section>
        </div>
      </dialog>
    );
  }
}
