import React, { useRef } from 'react';
import { alertInvalidInfo, alertActionSuccess } from 'utilities/alerts/alerts';
import { useLocation } from 'wouter';

function Form() {

  const [path, setPath] = useLocation();
  const emailRef = useRef();
  const userNameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  //alert for invalid email
  const alertInvalidEmail = (e) => {
    e.preventDefault();
    alertInvalidInfo('Please enter a valid email');
  };

  //form validation
  const formValidation = (email = '', userName = '', password = '', confirmPassword = '') => {
    if (email == '') {
      alertInvalidInfo('Please enter an email');
      return false;
    }
    if (userName == '') {
      alertInvalidInfo('Please enter an username');
      return false;
    }
    if (password == '') {
      alertInvalidInfo('Please enter a password');
      return false;
    }
    if (password !== confirmPassword) {
      alertInvalidInfo("Passwords don't match");
      return false;
    }
    return true;
  };

  //event when the form is uploaded
  const onSubmitForm = (e) => {
    e.preventDefault();
    let email = emailRef.current;
    let userName = userNameRef.current;
    let password = passwordRef.current;
    let confirmPassword = confirmPasswordRef.current;
    if (formValidation(email.value, userName.value, password.value, confirmPassword.value)) {
      alertActionSuccess('Sign up succes');
      console.log(email.value);
      console.log(userName.value);
      console.log(password.value);
      console.log(confirmPassword.value);
      email.value = '';
      userName.value = '';
      password.value = '';
      confirmPassword.value = '';
      setPath('/sesion/sign_in');
    }
  };

  return (
    <form onSubmit={onSubmitForm}>
      <input type="email" className='input-form' placeholder='Email address' autoComplete='email' ref={emailRef} onInvalid={alertInvalidEmail} />
      <input type="text" className='input-form' placeholder='Username' autoComplete='username' ref={userNameRef} />
      <input type="password" className='input-form' placeholder='Password' autoComplete='current-password' ref={passwordRef} />
      <input type="password" className='input-form' placeholder='Confirm password' autoComplete='current-password' ref={confirmPasswordRef} />
      <input type="submit" value="submit" className='submit' />
    </form>
  );
}

export default Form;