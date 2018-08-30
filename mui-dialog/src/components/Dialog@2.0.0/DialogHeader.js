import React from 'react';

export default function DialogHeader({ bottom, children }) {
  return (
    <section className={`dialog-header ${bottom ? 'bottom' : ''}`}>
      {children}
    </section>
  );
}

DialogHeader.defaultProps = {
  bottom: false
}
