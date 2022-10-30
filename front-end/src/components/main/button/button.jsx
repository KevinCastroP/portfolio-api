import React, { useEffect, useRef } from 'react';
import './button.css';
import { moveElement } from 'utilities/move-element';

function Button({ text }) {

  const buttonRef = useRef();

  useEffect(() => {
    buttonRef.current.onmousedown = (evt) => {
      moveElement(evt, (target, x, y, succes) => console.log(x + ', ' + y + ' ' + succes));
    };
  }, []);


  return (
    <button ref={buttonRef} onDragStart={() => { return false; }} className='button-header'>{text}</button>
  );
}

export default Button;