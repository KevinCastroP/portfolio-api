import React, { useState } from 'react';
import './profile-header.css';
import Profile from 'components/main/profile/profile';
import ButtonHeader from '../button-header/button-header';

function ProfileHeader() {

  const [buttons, setButtons] = useState([{ path: '#hola', text: 'button 1' }, { path: '#hi', text: 'button 2' }, { path: '#adios', text: 'button 3' }, { path: '#chao', text: 'button 4' }, { path: '#rayo', text: 'button 5' }, { path: '#carro', text: 'button 6' }, { path: '#sol', text: 'button 7' }, { path: '#luz', text: 'button 8' }, { path: '#compu', text: 'button 9' }]);

  return (
    <div className='profile-header'>
      <div className='profile-header-buttons'>
        {
          buttons.map(({ path, text }, index) =>
            index % 2 == 0 ? <ButtonHeader href={path} text={text} key={path} /> : null
          )
        }
      </div>
      <Profile image="https://i.pinimg.com/736x/b5/49/41/b5494197b2d462c940f88988b203d290.jpg" name='franck' role='phantom' />
      <div className='profile-header-buttons'>
        {
          buttons.map(({ path, text }, index) =>
            index % 2 != 0 ? <ButtonHeader href={path} text={text} key={path} /> : null
          )
        }
      </div>
    </div>
  );
}

export default ProfileHeader;