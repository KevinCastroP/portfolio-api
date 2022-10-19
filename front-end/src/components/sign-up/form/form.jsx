import React, { useRef } from 'react';
import { alertInvalidInfo, alertActionSuccess } from 'utilities/alerts/alerts';
import { useLocation } from 'wouter';

function Form() {

  const [path, setPath] = useLocation();
  const userNameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  //alert for invalid email
  const alertInvalidEmail = (e) => {
    e.preventDefault();
    alertInvalidInfo('Please enter a valid email');
  };

  //form validation
  const formValidation = (userName = '', password = '', confirmPassword = '') => {
    if (userName == '') {
      alertInvalidInfo('Please enter a email');
      return false;
    }
    if (password == '') {
      alertInvalidInfo('Please enter a password');
      return false;
    }
    if (password !== confirmPassword) {
      alertInvalidInfo('Passwords do not match');
      return false;
    }
    return true;
  };

  //event when the form is uploaded
  const onSubmitForm = (e) => {
    e.preventDefault();
    let userName = userNameRef.current;
    let password = passwordRef.current;
    let confirmPassword = confirmPasswordRef.current;
    if (formValidation(userName.value, password.value, confirmPassword.value)) {
      alertActionSuccess('Sign un succes');
      console.log(userName.value);
      console.log(password.value);
      console.log(confirmPassword.value);
      userName.value = '';
      password.value = '';
      confirmPassword.value = '';
      setPath('/sign_in');
    }
  };

  return (
    <form onSubmit={onSubmitForm}>
      <input type="email" className='input-form' placeholder='Email address' autoComplete='username' ref={userNameRef} onInvalid={alertInvalidEmail} />
      <input type="password" className='input-form' placeholder='Password' autoComplete='current-password' ref={passwordRef} />
      <input type="password" className='input-form' placeholder='Confirm password' autoComplete='current-password' ref={confirmPasswordRef} />
      <input type="submit" value="submit" className='submit' />
    </form>
  );
}

export default Form;