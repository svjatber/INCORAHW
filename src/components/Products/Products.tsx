import React from 'react';
import { MainComponentConsumer } from '../context/context';

export const Products = () => {
  // @ts-ignore
  return (
    <>
      <h1>Products</h1>
      <MainComponentConsumer>
        {context => (
          <div>
            {context.products.map((v: any) => (
              <>
                <li>
                  {v.name}-{v.price}
                </li>
                <button onClick={() => context.addProducts(v)}>Add Product to basket</button>
              </>
            ))}
          </div>
        )}
      </MainComponentConsumer>
    </>
  );
};
