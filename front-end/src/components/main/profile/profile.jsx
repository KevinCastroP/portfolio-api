import React from 'react';
import './profile.css';

function Profile({ image, name, role }) {
  return (
    <div className='profile'>
      <img src={image} alt="profile photo" />
      <b className='name'>{name}</b>
      <i className='role'>{role}</i>
    </div>
  );
}

export default Profile;