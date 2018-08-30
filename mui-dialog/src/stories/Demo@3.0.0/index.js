import React from 'react';

import Dialog from '../../components/Dialog@3.0.0';
import './style.css';

export default class Demo extends React.Component {

  state = {
    isDialogOpen: false
  };

  openDialog = () => {
    this.setState({
      isDialogOpen: true
    });
  };

  closeDialog = () => {
    this.setState({
      isDialogOpen: false
    });
  };

  render() {
    const { isDialogOpen } = this.state;
    return (
      <div className="container">
        <button onClick={this.openDialog}>Click me</button>
        <Dialog onClose={this.closeDialog} open={isDialogOpen}>
            <b header>some header</b>
            <h1 content>Some content</h1>
            <button actions style={{marginRight: '10px'}} onClick={this.closeDialog}>Close</button>
            <button actions onClick={this.closeDialog}>Confirm</button>
        </Dialog>
      </div>
    );
  }
}
