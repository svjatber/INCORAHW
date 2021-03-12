import React from 'react';
import './App.css';
import { Product, useProducts } from './timer';

interface Itimer{
  time: number,
  startTimer?:()=>void,
  stopTimer?:()=>void,
  pauseTimer?:()=>void,
  isPaused?:boolean,
  isFinished?:boolean
}

function App() {

  const { products, page, total, changePage, applyFilter, editProduct, deleteProduct, addProduct } = useProducts( { perPage: 6 });



  // @ts-ignore
  // @ts-ignore
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
    </div>

  )
}

export default App;
