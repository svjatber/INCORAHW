import React, { useEffect, useReducer, useState } from 'react';

interface MainComponentProps {
  children: React.ReactNode;
}

interface TextProps {
  products: any;
  addProducts(value: any): void;
  basket: any;
  deleteBasket(value: any): void;
}

export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface ICount extends Product {
  count?: number;
}

const productsArr: Product[] = [
  {
    id: 1,
    name: 'apple',
    price: 10
  },
  {
    id: 2,
    name: 'tomato',
    price: 15
  },
  {
    id: 3,
    name: 'cherry',
    price: 20
  },
  {
    id: 4,
    name: 'cucumber',
    price: 4
  },
  {
    id: 5,
    name: 'kiwi',
    price: 9
  },
  {
    id: 6,
    name: 'guava',
    price: 8
  },
  {
    id: 7,
    name: 'lemon',
    price: 10
  },
  {
    id: 8,
    name: 'grape',
    price: 16
  },
  {
    id: 9,
    name: 'fig',
    price: 12
  }
];

const { Provider, Consumer } = React.createContext<TextProps>({
  products: [],
  addProducts: () => {},
  basket: [],
  deleteBasket: () => {}
});

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_PRODUCTS': {
      const productItem = state.basket.find((v: ICount) => v.id === action.payload.id);
      if (productItem) {
        productItem.count += 1;
        const result = state.basket.map((x: ICount) => {
          if (x.id === productItem.id) {
            return productItem;
          }
          return x;
        });

        return { ...state, basket: [...result] };
      }
      action.payload.count = 1;
      return { ...state, basket: [...state.basket, action.payload] };
    }
    case 'DELETE_BASKET': {
      const deleteBasket = state.basket.filter((v: ICount) => v.id !== action.payload.id);
      return { ...state, basket: deleteBasket };
    }
    default:
      return state;
  }
};

const MainComponentProvider = ({ children }: MainComponentProps) => {
  // @ts-ignore
  const [{ products, basket }, dispatch] = useReducer<any>(reducer, { products: productsArr, basket: [] });

  const addProducts = (p: ICount) => {
    // @ts-ignore
    dispatch({ type: 'ADD_PRODUCTS', payload: p });
  };

  const deleteBasket = (p: ICount) => {
    // @ts-ignore
    dispatch({ type: 'DELETE_BASKET', payload: p });
  };

  return <Provider value={{ products, addProducts, basket, deleteBasket }}>{children}</Provider>;
};

export { MainComponentProvider, Consumer as MainComponentConsumer };
