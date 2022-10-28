import React from 'react';
import './sign-in.css';
import facebook from 'assets/facebook.png';
import gorjeo from 'assets/gorjeo.png';
import github from 'assets/github.png';
import Form from 'components/sign-in/form/form';
import { Link } from 'wouter';

function SignIn() {

  //sign in with another option
  const signInWithAnotherOption = (e) => {
    e.preventDefault();
  };

  return (
    <div className='sign-in'>
      <h2>Sign In Here</h2>
      <Form />
      <Link href='/sesion/sign_up'><a>do not have an account? sign up</a></Link>
      <h3>Or continue with</h3>
      <div className="sign-in-with">
        <button onClick={signInWithAnotherOption}><img src={facebook} alt="facebook-icon" /></button>
        <button onClick={signInWithAnotherOption}><img src={gorjeo} alt="twitter-icon" /></button>
        <button onClick={signInWithAnotherOption}><img src={github} alt="github-icon" /></button>
      </div>
    </div>
  );
}

export default SignIn;