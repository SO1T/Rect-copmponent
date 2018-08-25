import React from 'react';
import Select from './components/Select';


const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh'
}

export default class DefaultDemo extends React.Component {

  state = {
    value: null
  }

  onChoseItem = item => {
    this.setState({
      value: item
    })
  }
  render() {
    const { items } = this.props;
    const { value } = this.state;
    return (
      <div style={style}>
        <Select items={items} value={value} onChange={this.onChoseItem} />
      </div>
    );
  }
}
