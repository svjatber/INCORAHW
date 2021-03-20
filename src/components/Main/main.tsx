import React, { useState } from 'react';
import { Basket } from '../Basket/Basket';
import { Products } from '../Products/Products';
import { MainComponentProvider } from '../context/context';

function Main() {
  return (
    <MainComponentProvider>
      <Products />
      <Basket />
    </MainComponentProvider>
  );
}

export default Main;
