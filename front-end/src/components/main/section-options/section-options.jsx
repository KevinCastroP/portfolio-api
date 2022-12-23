import React, { useState, useRef, useEffect } from 'react';
import './section-options.css';
import { SketchPicker } from 'react-color';

function SectionOptions({ setUrl }) {

  const sectionOptionsRef = useRef();
  const [menu, setMenu] = useState(false);
  const [borderRadius, setBorderRadius] = useState(0);
  const [color, setColor] = useState("rgba(248, 248, 248, 1)");

  const onBorderRadiusChange = (evt) => {
    setBorderRadius(evt.target.value);
    sectionOptionsRef.current.parentNode.style.borderRadius = borderRadius + 'px';
  };

  const onColorChange = (evt) => {
    const newColor = evt.rgb;
    setColor(newColor);
    sectionOptionsRef.current.parentNode.style.background = `rgba(${newColor.r}, ${newColor.g}, ${newColor.b}, ${newColor.a})`;
  };

  const onSubmitBackground = (evt) => {
    const file = evt.target.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      setUrl(reader.result);
    });
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='section-options' ref={sectionOptionsRef}>
      <div className='section-options-content' hidden={!menu} onMouseLeave={() => setMenu(!menu)}>
        <p>border radius</p>
        <div className='border-radius-container'>
          <input value={borderRadius} type="range" max={30} id='border-radius' onChange={onBorderRadiusChange} />
          <label htmlFor="border-radius">{borderRadius}px</label>
        </div>
        <p>background color</p>
        <SketchPicker presetColors={[]} color={color} onChange={onColorChange} />
        <div className='custom-input-file-container'>
          <div className='custom-input-file'>
            <input type="file" className='input-file' onChange={onSubmitBackground} />
          </div>
        </div>
      </div>
      <div className='section-options-points' onClick={() => setMenu(!menu)}>
        <div hidden={menu}></div>
        <div hidden={menu}></div>
        <div hidden={menu}></div>
      </div>
    </div>
  );
}

export default SectionOptions;