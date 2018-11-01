import React from 'react';

import './style.css';

const CardEditor = ({ text, onChange, onSave }) => (
  <div className="card-editor">
    <input type="text" defaultValue={text} onChange={onChange} />
    <button onClick={onSave}>Save</button>
  </div>
);

export default CardEditor;
