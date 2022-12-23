import React, { useRef } from 'react';
import './button.css';
import { useMove } from 'hooks/useMove';

function Button({ text = 'Button', position = { x: '150px', y: '150px' } }) {
  const buttonRef = useRef();

  useMove(buttonRef);

  return (
    <button ref={buttonRef} style={{ left: position.x, top: position.y }} className='button'>{text}</button>
  );
}

export default Button;