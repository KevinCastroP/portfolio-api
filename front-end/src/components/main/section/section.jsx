import React from 'react';
import './section.css';
import SectionOptions from '../section-options/section-options';

function Section({ children }) {

  return (
    <section className='section'>
      {children}
      <SectionOptions />
    </section>
  );
}

export default Section;