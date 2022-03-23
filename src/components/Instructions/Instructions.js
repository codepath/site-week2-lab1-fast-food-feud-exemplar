import * as React from 'react';
import './Instructions.css';

function Instructions(props) {
  return (
    <aside className="instructions">
      <p>{props.instructions}</p>
    </aside>
  );
}

export default Instructions;
