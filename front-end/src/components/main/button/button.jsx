import React, { useRef } from 'react';
import './button.css';
import { useMove } from 'hooks/useMove';

function Button({ text }) {

  const buttonRef = useRef();

  useMove(buttonRef, (element) => { });

  return (
    <button ref={buttonRef} className='button-header'>{text}</button>
  );
}

export default Button;