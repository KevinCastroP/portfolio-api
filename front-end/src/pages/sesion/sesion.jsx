import React from 'react';
import './sesion.css';
import SignIn from 'pages/sesion/sign-in/sign-in';
import SignUp from 'pages/sesion/sign-up/sign-up';
import { SesionContextProvider } from 'context/sesion-context';
import { Route } from 'wouter';

function Sesion() {

  return (
    <div className='sesion'>
      <SesionContextProvider>
        <Route path='/sesion/sign_in' component={SignIn} />
        <Route path='/sesion/sign_up' component={SignUp} />
      </SesionContextProvider>
    </div>
  );
}

export default Sesion;