import React from 'react';
import './button-header.css';

function ButtonHeader({ text, href }) {
  return (
    <a className='button-header' href={href}><button>{text}</button></a>
  );
}

export default ButtonHeader;