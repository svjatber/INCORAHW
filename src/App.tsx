import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addProducts, deleteProduct, editProduct } from './state/actions/products';
import { allProducts } from './state/selector/productsSelector';

export type Obj = {
  id: number | string,
  name: string
}

function App() {
  const dispatch = useDispatch()
  const products = useSelector(allProducts)

  const deleteProducts = (v: Obj) => {
    dispatch(deleteProduct(v))
  }

  const editProductHandler = (v: Obj) =>{
    dispatch(editProduct(v))
  }


  return (
    <div>
      <div>
        {
          products.map((v: any)=>{
            return (
              <div key={v.id}>
                <h2>{v.id}</h2>
                <h3>{v.name}</h3>
                <button onClick={()=> deleteProducts(v)}>delete</button>
                <button onClick={()=> editProductHandler({id: v.id, name: 'editItem'})}>edit</button>
              </div>
            )

          })
        }
      </div>
      <button onClick={()=> dispatch(addProducts({id: Date.now(), name: 'newItem'}))}>
        Add Product
      </button>
    </div>
  )
}

export default App;
