import React, { useState } from 'react';
import './section.css';

function Section({ children }) {

  const [menu, setMenu] = useState(false);

  return (
    <section className='section'>

      {children}

      <div className='section-options-deploy' hidden={!menu} onMouseLeave={() => setMenu(!menu)}>
        <p>options</p>
      </div>

      <div className='section-options' onClick={() => setMenu(!menu)}>
        <div hidden={menu}></div>
        <div hidden={menu}></div>
        <div hidden={menu}></div>
      </div>

    </section>
  );
}

export default Section;