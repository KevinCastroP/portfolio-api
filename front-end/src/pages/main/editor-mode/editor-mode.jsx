import React from 'react';
import './editor-mode.css';
import Section from 'components/main/section/section';
import Button from 'components/main/button/button';
import ProfileHeader from 'components/main/profile-header/profile-header';

function EditorMode() {
  return (
    <div className='editor-mode'>
      <Section>
        <Button text='Boton de prueba 1' position={{ x: '50px', y: '10px' }} />
        <Button text='Boton de prueba 2' position={{ x: '80px', y: '50px' }} />
        <Button text='Boton de prueba 3' position={{ x: '100px', y: '120px' }} />
      </Section>
    </div>
  );
}

export default EditorMode;