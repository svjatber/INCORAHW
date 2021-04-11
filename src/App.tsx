import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { NotFound } from './Not Found';
import { store } from './state/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <NotFound />
      </Provider>
    </>
  );
}

export default App;
