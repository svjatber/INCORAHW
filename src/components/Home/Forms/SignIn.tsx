import React from 'react';
import './SignIn.scss';
function SignIn() {
  return (
    <div className='signInContainer'>
      <div className='title'>
        <h2>Log in</h2>
        <p>
          If you don't have an account yet, please <a href='/'>register</a> first
        </p>
      </div>
      <div className={'forms'}>
        <form className={'forms_signIn'}>
          <input type='text' defaultValue='Your email' className='forms_input' />
          <input type='text' defaultValue='Your password' className='forms_input' />
          <small>
            <a href='/'>I forgot my password</a>
          </small>
          <input type='radio' value='Remember me' id='rememberMe' className='forms_radio' />
          <button type='submit' className='forms_button'>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
