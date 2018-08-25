import React from 'react';
import Select from './components/Select';

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh'
}

const iconStyle = {
  marginRight: '6px',
}

const valueStyle = {
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  width: '100%',
  fontSize: '20px',
}

const ValueComponent = ({ value }) => (
  <div style={valueStyle}>
    <span>{ value }</span>
  </div>
);

export default class ValueCustomizeDemo extends React.Component {

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
        <Select items={items} value={value} valueComponent={ValueComponent} onChange={this.onChoseItem} />
      </div>
    );
  }
}
