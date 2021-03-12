import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export interface Product {
  id: number;
  name: string;
  price: number;
}

interface IFilterOptions {
  name?: string;
  priceMore?: number;
  priceLess: number;
}

const productsArray: Product[] = [{
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
    price: 20,
  },
  {
    id: 4,
    name: 'cucumber',
    price: 4,
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
  }];

interface IPerPage{
  perPage: number
}

export const useProducts = ({perPage}: IPerPage, initialArray: Product[] = productsArray) => {
  const [page, setPage] = useState<number>(1)
  const [products, setProducts] = useState<Product[] | []>([])
  const [total,setTotal] = useState<number>(0)

  const totalFunc = useMemo(()=> setTotal(Math.ceil(productsArray.length / perPage)),[perPage]);

  const productsFunc = useMemo(()=> {
    console.log('ssss')
    let start = (page - 1) * perPage;
    let end = start + perPage
    setProducts(productsArray.slice(start, end))
  },[page])


  const changePage = useCallback((num: number) =>{
    console.log('sdsddsads')
    setPage(num);
  },[total])

  const applyFilter = (obj: IFilterOptions) =>{

  }

  const editProduct = (prod: Product) =>{
    // @ts-ignore
    let productsEdit = products.map((value: Product) => {
      if(value.id === prod.id){
        return prod
      }
      return value
    });
    setProducts(productsEdit)
  }

  const deleteProduct = (prod: Product) =>{
    let productsDelete = products.filter((v: Product)=> v.id !== prod.id)
    setProducts(productsDelete);
  }

  const addProduct = (prod: Product) =>{
    setProducts(prev => [...prev, prod]);
  }
  return {
    total,
    products,
    page,
    changePage,
    applyFilter,
    editProduct,
    deleteProduct,
    addProduct
  }

}

