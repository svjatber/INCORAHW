import React from 'react';
import { useRef } from 'react';
import './App.css';
import { Product, useProducts } from './useProduct';


function App() {

  const { products, page, total, changePage, applyFilter, editProduct, deleteProduct, addProduct } = useProducts( { perPage: 2 });
  const inputEl = useRef<HTMLInputElement | null>(null);

  console.log(products)


  return(
    <div>
      {Array.from({ length: total }).map((v, index) => {
        return (
          <button onClick={()=>changePage(index + 1)}>{index + 1}</button>
        );
      })}
      {
        (products as  Array<Product[] | []>).map((v: any)=>{
          return(
            <div>
              <h2>{v.name}<span>{v.price}</span></h2>
              <button onClick={()=>editProduct({id: v.id, name: 'pineapple', price: 300})}>Edit</button>
              <button onClick={()=>deleteProduct(v)}>delete</button>
            </div>

          );
        })}
      <button onClick={()=> addProduct({id: 56, name: 'watermelon', price: 1500})}>Add</button>
      <button onClick={()=>applyFilter({priceLess: 1})}>Sort less</button>
      <button onClick={()=>applyFilter({priceLess: 1, priceMore: 1})}>Sort more</button>
      <input type="text" ref={inputEl}/>
      <button onClick={()=>applyFilter({priceLess: 1,name: inputEl.current?.value})}>Name</button>
    </div>

  )
}

export default App;
