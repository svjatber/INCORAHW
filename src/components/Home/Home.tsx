import React from 'react';
import SignIn from './Forms/SignIn';
import './Home.scss';

function Home() {
  return (
    <div className='main'>
      <div className='container'>
        <div className='balloon'>
          <img alt='balloon' />{' '}
        </div>
        <div className='signIn'>
          <SignIn />
        </div>
      </div>
    </div>
  );
}

export default Home;
