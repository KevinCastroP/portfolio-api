import React from 'react';
import './editor-mode.css';
import Section from 'components/main/section/section';
import Button from 'components/main/button/button';
import ProfileHeader from 'components/main/profile-header/profile-header';

function EditorMode() {
  return (
    <div className='editor-mode'>
      <Section>
        <Button text='boton de prueba' />
        <Button text='boton de prueba' />
        <Button text='boton de prueba' />

      </Section>
    </div>
  );
}

export default EditorMode;