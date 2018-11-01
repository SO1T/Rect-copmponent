import React from 'react';

const withLocalStorage = propNameAndMethods => Component => {
  return props => {
    propNameAndMethods.forEach(([name, methodName]) => {
      if (!localStorage[name]) {
        return;
      }
      const data = JSON.parse(localStorage[name]);
      const isEqual = typeof data === 'object' ? localStorage[name] === JSON.stringify(props[name]) : data === props[name];
      if (!isEqual) {
        props[methodName](data);
      }
    });
    const newProps = propNameAndMethods.reduce((resultProps, [name, methodName]) => ({
      ...resultProps,
      [methodName]: value => {
        props[methodName](value);
        localStorage[name] = JSON.stringify(value);
      }
    }), props);
    return <Component {...newProps} />
  };
};

export default withLocalStorage;
