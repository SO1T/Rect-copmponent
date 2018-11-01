import React from 'react';
import { FaPen } from 'react-icons/fa';
import './style.css';

const Card = ({ text, setEditingMode, showEditButton, isActive }) => (
  <div className={`card ${isActive ? 'active' : ''}`}>
    <p>{text}</p>
    {
      showEditButton && <div className="edit-btn"><FaPen onClick={() => setEditingMode(true)} /></div>
    }
  </div>
);

Card.defaultProps = {
  showEditButton: false,
}

export default Card;
