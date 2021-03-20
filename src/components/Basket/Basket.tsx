import React from 'react';
import { MainComponentConsumer } from '../context/context';

const Helper = (bask: any) => {
  if (bask) {
    return bask.reduce((total: any, amount: any) => {
      return (total += amount.price * amount.count);
    }, 0);
  }
  return 0;
};

export const Basket = () => {
  return (
    <>
      <h1>Basket</h1>
      <MainComponentConsumer>
        {context => (
          <div>
            {context.basket.map((v: any) => (
              <>
                <li>
                  {v.name}-{v.price}-{v.count}
                </li>
                <button onClick={() => context.deleteBasket(v)}>delete item</button>
              </>
            ))}
            <p>Price: {Helper(context.basket)}</p>
          </div>
        )}
      </MainComponentConsumer>
    </>
  );
};
