import React from 'react';
import './editor-mode.css';
import Section from 'components/main/section/section';
import Button from 'components/main/button/button';

function EditorMode() {
  return (
    <div className='editor-mode'>
      <Section>
        <Button text='boton de prueba 1' />
        <Button text='boton de prueba 2' />
        <Button text='boton de prueba 3' />
      </Section>
    </div>
  );
}

export default EditorMode;