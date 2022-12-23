import React, { useState } from 'react';
import './section.css';
import SectionOptions from '../section-options/section-options';

function Section({ children }) {

  const [url, setUrl] = useState('');

  return (
    <section className='section'>
      {children}
      <SectionOptions setUrl={setUrl} />
      <img src={url} alt="" hidden={!Boolean(url)} />
    </section>
  );
}

export default Section;