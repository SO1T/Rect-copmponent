import React from 'react';

export default function DialogActions({ children, top }) {
  return (
    <section className={`dialog-actions ${top ? 'top' : ''}`}>
      {children}
    </section>
  );
}
