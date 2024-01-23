import React, { useState } from 'react';
import '../styles/ToDos.scss';
import '../styles/Main.scss';

const ToDo = ({ todoInfo }) => {
  const [isChecked, setIsChecked] = useState(todoInfo.completed);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={`todo-item ${isChecked ? 'completed' : ''}`} onClick={handleToggle}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => {}}
        onClick={(e) => e.stopPropagation()}
      />
      <div>
        {todoInfo.title}
      </div>
    </div>
  );
};

export default ToDo;
