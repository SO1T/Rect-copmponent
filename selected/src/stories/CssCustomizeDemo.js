import React from 'react';
import Select from './components/Select';


const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh'
}

const selectStyle = {
  width: '400px',
  height: '50px',
  boxShadow: '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
  backgroundColor: '#fff',
  borderRadius: '5px',
  paddingLeft: '10px',
}

const imageStyle = {
  width: '40px',
  height: '40px',
}

const Image = () => (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/7/75/Emblem_of_the_First_Galactic_Empire.svg"
    style={imageStyle}
    alt="imperial" />
  )

export default class CssCustomizeDemo extends React.Component {

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
        <Select
          style={selectStyle}
          items={items}
          value={value}
          onChange={this.onChoseItem}
          iconComponent={Image} />
      </div>
    );
  }
}
