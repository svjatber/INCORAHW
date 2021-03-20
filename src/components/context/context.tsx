import React, { useEffect, useState } from 'react';

interface MainComponentProps {
  children: React.ReactNode;
}

interface TextProps {
  products: any;
  addProducts(value: ICount): void;
  basket: any;
  deleteBasket(value: ICount): void;
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

const MainComponentProvider = ({ children }: MainComponentProps) => {
  const [products, setProducts] = useState<any>([]);
  const [basket, setBasket] = useState<any>([]);

  useEffect(() => {
    setProducts(productsArr);
  }, []);

  const addProducts = (p: ICount) => {
    const productItem = basket.find((v: ICount) => v.id === p.id);
    if (productItem) {
      productItem.count += 1;
      const result = basket.map((x: ICount) => {
        if (x.id === productItem.id) {
          return productItem;
        }
        return x;
      });
      setBasket(result);
      return;
    }
    p.count = 1;
    setBasket([...basket, p]);
  };

  const deleteBasket = (p: ICount) => {
    const deleteBasket = basket.filter((v: ICount) => v.id !== p.id);
    setBasket(deleteBasket);
  };

  return <Provider value={{ products, addProducts, basket, deleteBasket }}>{children}</Provider>;
};

export { MainComponentProvider, Consumer as MainComponentConsumer };
