import React from 'react';

import Dialog, {DialogActions, DialogHeader, DialogContent} from '../../components/Dialog@2.0.0';
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
          <DialogHeader>
            <b>some header</b>
          </DialogHeader>
          <DialogContent>
            <h1>Some content</h1>
          </DialogContent>
          <DialogActions>
            <button onClick={this.closeDialog}>Close</button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
