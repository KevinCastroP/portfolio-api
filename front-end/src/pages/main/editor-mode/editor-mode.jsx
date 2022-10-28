import React from 'react';
import './editor-mode.css';
import Section from 'components/main/section/section';
import ProfileHeader from 'components/main/profile-header/profile-header';

function EditorMode() {
  return (
    <div className='editor-mode'>
      <Section>
        <ProfileHeader />
      </Section>
    </div>
  );
}

export default EditorMode;