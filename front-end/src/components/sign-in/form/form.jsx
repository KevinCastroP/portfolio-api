import React, { useRef, useContext } from 'react';
import { alertInvalidInfo, alertActionSuccess } from 'utilities/alerts/alerts';
import { Link } from 'wouter';
import { SesionContext } from 'context/sesion-context';
import 'components/sign-in/form/form.css';

function Form() {

  const { updateSesion } = useContext(SesionContext);
  const userNameRef = useRef();
  const passwordRef = useRef();
  const rememberMeRef = useRef();

  //alert for invalid email
  const alertInvalidEmail = (e) => {
    e.preventDefault();
    alertInvalidInfo('Please enter a valid email');
  };

  //form validation
  const formValidation = (userName = '', password = '') => {
    if (userName == '') {
      alertInvalidInfo('Please enter a email');
      return false;
    }
    if (password == '') {
      alertInvalidInfo('Please enter a password');
      return false;
    }
    return true;
  };

  //event when the form is uploaded
  const onSubmitForm = (e) => {
    e.preventDefault();

    let userName = userNameRef.current;
    let password = passwordRef.current;
    let rememberMe = rememberMeRef.current;
    if (formValidation(userName.value, password.value)) {
      alertActionSuccess('Sign in success');
      console.log(userName.value);
      console.log(password.value);
      console.log(rememberMe.checked);
      updateSesion(userName.value);
      userName.value = '';
      password.value = '';
      rememberMe.checked = false;
    }
  };

  return (
    <form onSubmit={onSubmitForm}>
      <input type="email" className='input-form' placeholder='Email address' ref={userNameRef} autoComplete='username' onInvalid={alertInvalidEmail} />
      <input type="password" className='input-form' placeholder='Password' ref={passwordRef} autoComplete='current-password' />
      <div className='sign-in-options'>
        <div className="remember-me">
          <input type="checkbox" ref={rememberMeRef} />
          <label htmlFor='remember-me-checkbox'>Remember me?</label>
        </div>
        <Link href="/forgot_your_password"><a>Forgot your password?</a></Link>
      </div>
      <input type="submit" className='submit' value="Sign in" />
    </form>
  );
}

export default Form;